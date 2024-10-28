import { CommonNodeData } from "@/nodes/common-node"
import { useMemo, useState } from "react"
import { useReactFlow } from "reactflow"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import {
    NotebookPen,
    PaintBucket,
    Palette,
    PencilLine,
    Scaling,
    Sparkles,
} from "lucide-react"
import { Slider } from "./ui/slider"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useNode } from "@/hooks"

interface NodeInfoProps {
    id?: string
}

const sizeOptions = ["Nhỏ", "Vừa", "Lớn", "Rất lớn"]

const sizeMap: Record<number, number> = {
    1: 100,
    2: 120,
    3: 140,
    4: 180,
}

const sizeMapReverse: Record<number, number> = {
    100: 1,
    120: 2,
    140: 3,
    180: 4,
}

const NodeInfo = ({ id }: NodeInfoProps) => {
    if (!id) return null
    const { node, setNode } = useNode(id)

    const handleSettingsChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setNode({
            ...node,
            data: {
                ...node.data,
                [e.target.name]: e.target.value,
            },
        })
    }

    const handleSizeChange = (value: number[]) => {
        setNode({
            ...node,
            data: {
                ...node.data,
                height: sizeMap[value[0]],
                width: sizeMap[value[0]] * 2,
            },
            height: sizeMap[value[0]],
            width: sizeMap[value[0]] * 2,
        })
    }

    const handleAISuggestion = () => {
        const suggestions = [
            "Consider adding key points related to this topic.",
            "Think about potential connections to other nodes.",
            "Reflect on the importance of this idea in the overall context.",
            "What are the implications or consequences of this concept?",
        ]
        const suggestion =
            suggestions[Math.floor(Math.random() * suggestions.length)]
        setNode({
            ...node,
            data: {
                ...node.data,
                note: suggestion,
            },
        })
    }

    return (
        <>
            <div className="grid gap-6 py-6">
                <div className="space-y-2">
                    <Label
                        htmlFor="label"
                        className="text-sm font-medium text-gray-700"
                    >
                        <PencilLine className="w-4 h-4 inline-block mr-2" />
                        Tên node
                    </Label>
                    <Input
                        id="label"
                        name="label"
                        type="text"
                        value={node.data.label}
                        onChange={handleSettingsChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label
                        htmlFor="size"
                        className="text-sm font-medium text-gray-700"
                    >
                        <Scaling className="w-4 h-4 inline-block mr-2" />
                        Kích thước
                    </Label>
                    <Slider
                        id="size"
                        min={1}
                        max={4}
                        step={1}
                        value={[sizeMapReverse[node.data.height]]}
                        onValueChange={handleSizeChange}
                        className="py-4"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        {sizeOptions.map((option, index) => (
                            <span
                                key={index}
                                className={
                                    sizeMapReverse[node.data.height] ===
                                    index + 1
                                        ? "font-medium text-gray-700"
                                        : ""
                                }
                            >
                                {option}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label
                            htmlFor="bgColor"
                            className="text-sm font-medium text-gray-700"
                        >
                            <PaintBucket className="w-4 h-4 inline-block mr-2" />
                            Màu nền
                        </Label>
                        <div className="flex items-center space-x-2">
                            <Input
                                id="bgColor"
                                name="bgColor"
                                type="color"
                                className="w-12 h-8 p-1 rounded cursor-pointer"
                                value={node.data.bgColor}
                                onChange={handleSettingsChange}
                            />
                            <Input
                                name="bgColor"
                                className="flex-grow"
                                value={node.data.bgColor}
                                onChange={handleSettingsChange}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label
                            htmlFor="textColor"
                            className="text-sm font-medium text-gray-700"
                        >
                            <Palette className="w-4 h-4 inline-block mr-2" />
                            Màu chữ
                        </Label>
                        <div className="flex items-center space-x-2">
                            <Input
                                id="textColor"
                                name="textColor"
                                type="color"
                                className="w-12 h-8 p-1 rounded cursor-pointer"
                                value={node.data.textColor}
                                onChange={handleSettingsChange}
                            />
                            <Input
                                name="textColor"
                                className="flex-grow"
                                value={node.data.textColor}
                                onChange={handleSettingsChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <Label
                            htmlFor="note"
                            className="text-sm font-medium text-gray-700"
                        >
                            <NotebookPen className="w-4 h-4 inline-block mr-2" />
                            Ghi chú
                        </Label>
                        <Button
                            className="bg-gradient-to-br from-purple-500 to-pink-500 shadow-md font-bold uppercase group"
                            size="sm"
                            onClick={handleAISuggestion}
                        >
                            <Sparkles className="size-4 mr-2" />
                            Gợi ý từ AI
                        </Button>
                    </div>
                    <Textarea
                        id="note"
                        name="note"
                        value={node.data.note}
                        onChange={handleSettingsChange}
                        className="min-h-[400px]"
                    />
                </div>
            </div>
        </>
    )
}

export default NodeInfo
