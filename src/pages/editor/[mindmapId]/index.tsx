import { useState } from "react"
import Mindmap from "../_components/Mindmap"
import ModalSide from "../_components/ModalSide"
import TakeNote from "../_components/TakeNote"

const MindmapEditorPage = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Mindmap isSetOpen={setOpen} />
            <ModalSide
                isOpen={isOpen}
                setIsOpen={setOpen}
                title="Take note"
                description="Chiến dịch Điện Biện Phủ"
            >
                <TakeNote />
            </ModalSide>
        </>
    )
}

export default MindmapEditorPage
