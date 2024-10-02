import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BotMessageSquare, Send, X } from "lucide-react"

export default function ChatBot() {
    return (
        <>
            <div className=" flex justify-between items-center">
                <h2 className="text-base font-bold">Chat with AI</h2>
                <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                </Button>
            </div>
            <div className="flex justify-center space-x-2">
                <Button className="w-full" variant="outline">
                    Explain
                </Button>
                <Button className="w-full" variant="outline">
                    Edit
                </Button>
            </div>
            <div className="p-4 flex-1 overflow-auto">
                <div className="flex items-start space-x-3">
                    <div className="size-8  flex items-center justify-center">
                        <BotMessageSquare />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow">
                        <p className="text-sm">
                            Hello! I'm the AI chatbot. Please select the node
                            you want to explain then click on the Send button.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex space-x-2">
                <Input placeholder="Select node to explain then click on the Send button" />
                <Button className="bg-blue-500 text-white">
                    <Send className="size-4" />
                </Button>
            </div>
        </>
    )
}
