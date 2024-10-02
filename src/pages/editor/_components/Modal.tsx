import { AlertDialogHeader } from "@/components/ui/alert-dialog"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog"

interface IModalProps {
    children: React.ReactNode
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    title: string
    description?: string
}
export default function Modal({
    children,
    isOpen,
    setIsOpen,
    title,
    description,
}: IModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <AlertDialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription className="pt-2 text-md">
                            {description}
                        </DialogDescription>
                    )}
                </AlertDialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}
