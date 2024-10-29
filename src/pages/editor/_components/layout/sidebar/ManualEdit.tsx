import { Button } from "@/components/ui/button"
import { Download, Network, Plus, Trash2, X } from "lucide-react"

export default function ManualEdit() {
    const actions = []
    return (
        <>
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
