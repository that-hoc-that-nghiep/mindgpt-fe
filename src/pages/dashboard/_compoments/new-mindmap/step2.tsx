import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useCreateMindmap } from "@/stores/create-mindmap-store"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect } from "react"

const Step2 = () => {
    const { formData, nextStep, prevStep } = useCreateMindmap()

    useEffect(() => {}, [])

    return (
        <div className="flex h-full items-center flex-col py-10">
            <h1 className="capitalize text-3xl font-bold mb-16">
                Cung cấp ý tưởng
            </h1>
            <div className="w-full flex flex-col items-center">
                {formData.get("type") === "creative" && (
                    <Textarea
                        className="w-full max-w-5xl h-40 mb-10"
                        placeholder="Hãy điền những ý tưởng ban đầu của bạn, chúng tôi sẽ biến nó thành sơ đồ tư duy thật đặc sắc!"
                    />
                )}
                <div className="flex gap-4">
                    <Button variant="outline" onClick={prevStep}>
                        <ChevronLeft className="size-4 mr-2" /> Quay lại
                    </Button>
                    <Button onClick={nextStep}>
                        Tiếp theo <ChevronRight className="size-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Step2
