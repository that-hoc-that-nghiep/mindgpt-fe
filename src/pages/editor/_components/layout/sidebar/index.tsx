import { MessageCircleMore, PenSquare, PuzzleIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dispatch, ReactElement, SetStateAction, useState } from "react"
import ChatBot from "./ChatBot"
import Quiz from "./Quiz"
import ManualEdit from "./ManualEdit"

interface MenuItem {
    title: string
    comp: ReactElement
    icon: ReactElement
}

const menuItems: MenuItem[] = [
    {
        title: "Chat với trợ lý ảo",
        comp: <ChatBot />,
        icon: <MessageCircleMore className="text-blue-500" />,
    },
    {
        title: "Chỉnh sửa thủ công",
        comp: <ManualEdit />,
        icon: <PenSquare className="text-blue-500" />,
    },
    {
        title: "Tạo câu hỏi",
        comp: <Quiz />,
        icon: <PuzzleIcon className="text-blue-500" />,
    },
]

export default function Sidebar() {
    const [selected, setSelected] = useState<MenuItem>(menuItems[0])
    const [open, setOpen] = useState(false)
    return (
        <div className="border-r flex flex-row">
            <div className=" flex flex-col p-2 space-y-5 border">
                {menuItems.map((item, index) => (
                    <Button
                        key={index}
                        variant="ghost"
                        className={`flex items-center space-x-2 ${
                            selected === item && "bg-blue-100"
                        }`}
                        onClick={() => {
                            setOpen(true)
                            setSelected(item)
                        }}
                    >
                        {item.icon}
                    </Button>
                ))}
            </div>
            {open && (
                <div className="flex flex-col w-[25rem] p-3 space-y-2 h-full">
                    <div className="flex justify-between items-center">
                        <h2 className="text-base font-bold">
                            {selected.title}
                        </h2>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setOpen(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="flex-grow overflow-auto">
                        {selected.comp}
                    </div>
                </div>
            )}
        </div>
    )
}