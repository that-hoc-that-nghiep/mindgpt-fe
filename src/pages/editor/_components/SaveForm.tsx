import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ShowNotificationError } from "@/common/notificationError"
import { Dispatch, SetStateAction } from "react"
import { Loader2 } from "lucide-react"
import { NotificationToast } from "@/common/notificationToast"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
interface ISaveFormProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>
    minmapId: number
}
export default function SaveForm({ setIsOpen, minmapId }: ISaveFormProps) {
    const wait = () => new Promise((resolve) => setTimeout(resolve, 1000))
    const formSchema = z.object({
        minmapId: z.number().min(1),
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            minmapId: minmapId,
        },
    })

    const onSubmit = async () => {
        try {
            await wait()
            setIsOpen(false)
            NotificationToast.success("Save mindmap successfully!")
        } catch (error) {
            ShowNotificationError(error)
        }
    }
    const loading = form.formState.isSubmitting
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex justify-end space-x-2">
                    <Button
                        disabled={loading}
                        size="lg"
                        variant="outline"
                        onClick={() => setIsOpen(false)}
                        type="button"
                    >
                        Cancel
                    </Button>
                    <Button disabled={loading} size="lg" type="submit">
                        {loading ? (
                            <span className="flex ">
                                <Loader2 className="size-5 mr-2 animate-spin" />
                                Saving...
                            </span>
                        ) : (
                            <span>Save</span>
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
