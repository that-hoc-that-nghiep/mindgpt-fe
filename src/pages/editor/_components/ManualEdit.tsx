import { Button } from "@/components/ui/button"
import { Download, Network, Plus, Trash2, X } from "lucide-react"

export default function ManualEdit() {
    const actions = [
        { icon: Plus, label: "Add node" },
        { icon: Trash2, label: "Clear canvas" },
        { icon: Network, label: "Auto layout" },
        { icon: Network, label: "Auto layout layer" },
        { icon: Download, label: "Download image" },
    ]
    return (
        <>
            <div className=" flex justify-between items-center">
                <h2 className="text-base font-bold">Manual edit</h2>
                <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {actions.map((action, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        className="flex flex-col items-center justify-center h-[6rem] bg-blue-50 hover:bg-blue-100"
                    >
                        <action.icon className="h-6 w-6 mb-2 text-sky-600" />
                        <span className="text-xs text-sky-600">
                            {action.label}
                        </span>
                    </Button>
                ))}
            </div>
        </>
    )
}
