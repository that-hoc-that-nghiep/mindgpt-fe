import { useCheckNodeSelected } from "@/stores/selected-nodes-store"
import { cn } from "@/lib/utils"
import { useDisclosure } from "@mantine/hooks"
import { useEffect, useState } from "react"
import {
    Handle,
    NodeToolbar,
    Position,
    useNodeId,
    useReactFlow,
} from "reactflow"
import NodeInfo from "@/components/node-info"
import { useSheet } from "@/hooks"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Check, NotebookPen, Pencil, Trash2, X } from "lucide-react"
import { Input } from "@/components/ui/input"

export interface BaseNodeData {
    label?: string
    note?: string
}

interface BaseNodeProps extends BaseNodeData {
    selected: boolean
    className?: string
    labelClassName?: string
}

const BaseNode = ({
    label,
    selected,
    className = "",
    labelClassName = "",
    note,
}: BaseNodeProps) => {
    const [editMode, { open: openEditMode, close: closeEditMode }] =
        useDisclosure(false)

    const { getNode, setNodes, getNodes } = useReactFlow()
    const nodeId = useNodeId()

    const [labelEdit, setLabelEdit] = useState("")
    const [isSaved, setIsSaved] = useState(false)

    const handleEditSave = () => {
        setIsSaved(true)
        closeEditMode()
    }

    const handleEditCancel = () => {
        setLabelEdit(label)
        closeEditMode()
    }

    const sheet = useSheet()
    const handleTakeNote = () => {
        sheet.showSheet({
            title: "Take note",
            children: <NodeInfo />,
        })
    }

    useEffect(() => {
        if (isSaved) {
            const nodes = getNodes()
            const node = getNode(nodeId!)
            if (node) {
                setNodes(
                    nodes.map((n) => {
                        if (n.id === nodeId) {
                            return {
                                ...n,
                                data: {
                                    ...n.data,
                                    label: labelEdit,
                                },
                            }
                        }
                        return n
                    })
                )
            }
            setIsSaved(false)
        }
    }, [isSaved, labelEdit, nodeId, getNode, getNodes, setNodes])

    useEffect(() => {
        if (!selected) {
            handleEditCancel()
        }
    }, [selected])

    return (
        <>
            <NodeToolbar position={Position.Right} offset={20} align="center">
                {editMode ? (
                    <div className="flex flex-col gap-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Check
                                    className="cursor-pointer size-5 text-green-500"
                                    onClick={handleEditSave}
                                />
                            </TooltipTrigger>
                            <TooltipContent side="right">Lưu</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <X
                                    className="cursor-pointer size-5 text-red-500"
                                    onClick={handleEditCancel}
                                />
                            </TooltipTrigger>
                            <TooltipContent side="right">Hủy</TooltipContent>
                        </Tooltip>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <NotebookPen
                                    className="cursor-pointer size-5 text-green-500"
                                    onClick={handleTakeNote}
                                />
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Ghi chú
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Pencil
                                    className="cursor-pointer size-5 text-blue-500"
                                    onClick={() => {
                                        openEditMode()
                                        setLabelEdit(label!)
                                    }}
                                />
                            </TooltipTrigger>
                            <TooltipContent side="right">Sửa</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Trash2
                                    className="cursor-pointer size-5 text-red-500"
                                    onClick={() => {
                                        setNodes((nodes) =>
                                            nodes.filter((n) => n.id !== nodeId)
                                        )
                                    }}
                                />
                            </TooltipTrigger>
                            <TooltipContent side="right">Xóa</TooltipContent>
                        </Tooltip>
                    </div>
                )}
            </NodeToolbar>

            <div
                className={cn(
                    ` 
                    w-auto h-auto p-1
                    transition-all duration-150 shadow-md
                    bg-white flex items-center justify-center border border-slate-500
                    ${
                        (selected || selected) &&
                        "border-green-600 scale-110 border-2"
                    }
                      `,
                    className
                )}
            >
                <div className="flex items-center w-full h-full gap-1">
                    <div className="flex-grow text-center text-xs">
                        {label && (
                            <div className={cn(labelClassName)}>
                                {editMode ? (
                                    <Input
                                        value={labelEdit}
                                        onChange={(e) =>
                                            setLabelEdit(e.currentTarget.value)
                                        }
                                        className="w-full text-center border border-black rounded-sm"
                                    />
                                ) : (
                                    <span>{label}</span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <Handle type="source" position={Position.Right} />
                <Handle type="target" position={Position.Left} />
            </div>
        </>
    )
}

export default BaseNode
