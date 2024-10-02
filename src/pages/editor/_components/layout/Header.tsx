import { Button } from "@/components/ui/button"
import { BrainCircuit, Check, PenSquare } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"
import { Link } from "react-router-dom"
interface IHeaderProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
export default function Header({ setIsOpen }: IHeaderProps) {
    const [text, setText] = useState("Chiến dịch Điện Biên Phủ")
    const [isEditing, setIsEditing] = useState(false)
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
                        <input
                            autoFocus
                            className="text-base font-bold"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></input>
                        <Button
                            onClick={() => setIsEditing(!isEditing)}
                            variant="ghost"
                            size="icon"
                        >
                            <Check className="size-4" />
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
                <Button variant="outline" asChild>
                    <Link to={"/dashboard/abc"}>Cancel</Link>
                </Button>
                <Button variant="success" onClick={() => setIsOpen(true)}>
                    Save
                </Button>
            </div>
        </header>
    )
}
