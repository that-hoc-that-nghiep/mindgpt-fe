import { useMindmap } from "@/api/hooks"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDialog, useMindmapThumbnail } from "@/hooks"
import { CommonNodeData } from "@/nodes/common-node"
import { convertMindmapEdgeToEdge, convertMindmapNodeToNode } from "@/utils"
// import { useCurrentMindmap } from "@/stores"
import { instance } from "@/utils/axios"
import { BrainCircuit, Check, PenSquare } from "lucide-react"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import toast, { useToasterStore } from "react-hot-toast"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useReactFlow } from "reactflow"
interface IHeaderProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
export default function Header() {
    const { orgId, mindmapId } = useParams()
    const { data: mindmapData, setMindmap } = useMindmap(orgId, mindmapId)
    const [saving, setSaving] = useState(false)
    const [text, setText] = useState(mindmapData?.title || "")
    const [isEditing, setIsEditing] = useState(false)
    const dialog = useDialog()
    const navigate = useNavigate()
    const getThumbnail = useMindmapThumbnail()
    const { getNodes, getEdges } = useReactFlow<CommonNodeData>()
    useEffect(() => {
        if (mindmapData) {
            setText(mindmapData.title)
        }
    }, [mindmapData])

    const handleSetTitle = () => {
        setMindmap({
            ...mindmapData,
            title: text,
        })
        setIsEditing(false)
    }

    const handleExitWithoutSave = () => {
        setMindmap(mindmapData)
        navigate(`/dashboard/${orgId}`)
        dialog.hideDialog()
    }

    const handleSave = async () => {
        setSaving(true)
        const loading = toast.loading("Đang lưu sơ đồ...")
        try {
            await instance.patch(`/mindmap/${orgId}/${mindmapId}`, {
                title: mindmapData.title,
                thumbnail: await getThumbnail(),
                nodes: getNodes().map((node) => convertMindmapNodeToNode(node)),
                edges: getEdges().map((edge) => convertMindmapEdgeToEdge(edge)),
            })
            toast.success("Đã lưu")
            navigate(`/dashboard/${orgId}`)
        } catch (error) {
            toast.error("Có lỗi xảy ra, vui lòng thử lại")
        } finally {
            setSaving(false)
            toast.dismiss(loading)
            dialog.hideDialog()
        }
    }

    const handleExit = () => {
        dialog.showDialog({
            title: "Thoát",
            children: (
                <div>
                    <p>Bạn có muốn lưu sơ đồ trước khi thoát không?</p>
                </div>
            ),
            footer: (
                <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={dialog.hideDialog}>
                        Hủy
                    </Button>
                    <Button
                        onClick={handleExitWithoutSave}
                        variant="destructive"
                    >
                        Không lưu & Thoát
                    </Button>
                    <Button onClick={handleSave} variant="success">
                        Lưu & Thoát
                    </Button>
                </div>
            ),
        })
    }

    return (
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
            <div className="flex items-center space-x-2">
                <Link to={"/dashboard/abc"} className="flex gap-2 font-bold">
                    <BrainCircuit className="size-6 text-primary" />
                    MindGPT
                </Link>
                <span className="h-4 border border-l-1 border-gray-300 bg-gray-300" />
                {isEditing ? (
                    <>
                        <Input
                            autoFocus
                            className="text-base font-bold"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></Input>
                        <Button
                            onClick={() => setIsEditing(!isEditing)}
                            variant="ghost"
                            size="icon"
                        >
                            <Check
                                className="size-4"
                                onClick={handleSetTitle}
                            />
                        </Button>
                    </>
                ) : (
                    <>
                        <div className="text-base font-bold">{text}</div>
                        <Button
                            onClick={() => setIsEditing(!isEditing)}
                            variant="ghost"
                            size="icon"
                        >
                            <PenSquare className="size-4" />
                        </Button>
                    </>
                )}
            </div>
            <div className="flex items-center gap-2">
                <Button
                    disabled={saving}
                    variant="default"
                    onClick={handleExit}
                >
                    Thoát
                </Button>
            </div>
        </header>
    )
}
