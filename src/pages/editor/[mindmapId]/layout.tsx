import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../_components/layout/Header"
import Sidebar from "../_components/layout/Sidebar"
import Modal from "../_components/Modal"
import SaveForm from "../_components/SaveForm"
import PlayQuiz from "../_components/PlayQuiz"

const MindmapEditorLayout = () => {
    const [isOpen, setOpen] = useState(false)
    const [isQuizOpen, setQuizOpen] = useState(false)

    return (
        <>
            <div className="flex h-screen flex-col">
                <Header setIsOpen={setOpen} />
                <div className="flex h-full flex-row">
                    <Sidebar setIsOpen={setQuizOpen} />
                    <Outlet />
                </div>
            </div>
            {isOpen && (
                <Modal
                    isOpen={isOpen}
                    setIsOpen={setOpen}
                    title="Confirm minmap"
                    description="Are you sure you want to save this mindmap?"
                >
                    <SaveForm setIsOpen={setOpen} minmapId={1}></SaveForm>
                </Modal>
            )}
            {isQuizOpen && (
                <Modal
                    isOpen={isQuizOpen}
                    setIsOpen={setQuizOpen}
                    title="Play Quiz"
                >
                    <PlayQuiz />
                </Modal>
            )}
        </>
    )
}

export default MindmapEditorLayout
