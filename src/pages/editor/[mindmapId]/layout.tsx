import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../_components/layout/Header"
import Sidebar from "../_components/layout/Sidebar"
import Modal from "../_components/Modal"
import SaveForm from "../_components/SaveForm"
import PlayQuiz from "../_components/PlayQuiz"
import { TypeSelectAnswer } from "@/constants/editor"
import { ISentenceQuiz } from "@/services"
import AuthPage from "@/components/auth-page"
const sentences: ISentenceQuiz[] = [
    {
        question:
            "Giai đoạn nào trong chiến dịch Điện Biên Phủ chủ yếu liên quan đến Tấn Công?",
        answers: [
            { key: TypeSelectAnswer.A, value: "Giai Đoạn 1: Chuẩn Bị" },
            { key: TypeSelectAnswer.B, value: "Giai Đoạn 2: Phản công" },
            { key: TypeSelectAnswer.C, value: "Giai Đoạn 3: Tấn Công" },
            { key: TypeSelectAnswer.D, value: "Giai Đoạn 4: Kết thúc" },
        ],
        correctAnswer: TypeSelectAnswer.B,
    },
    {
        question:
            "Tấn Công trong chiến dịch Điện Biên Phủ chủ yếu nhằm mục đích gì?",
        answers: [
            { key: TypeSelectAnswer.A, value: "Để phòng thủ" },
            { key: TypeSelectAnswer.B, value: "Để thương thuyết" },
            { key: TypeSelectAnswer.C, value: "Để chiếm lĩnh vị trí" },
            { key: TypeSelectAnswer.D, value: "Để rút lui" },
        ],
        correctAnswer: TypeSelectAnswer.A,
    },
    {
        question:
            "Chiến thuật Tấn Công trong chiến dịch Điện Biên Phủ có thể bao gồm hành động nào?",
        answers: [
            { key: TypeSelectAnswer.A, value: "Xây dựng công sự" },
            { key: TypeSelectAnswer.B, value: "Đàm phán hòa bình" },
            { key: TypeSelectAnswer.C, value: "Tổ chức lực lượng chiến đấu" },
            { key: TypeSelectAnswer.D, value: "Rút quân" },
        ],
        correctAnswer: TypeSelectAnswer.A,
    },
    {
        question:
            "Ai là lực lượng chủ yếu thực hiện Tấn Công trong chiến dịch Điện Biên Phủ?",
        answers: [
            { key: TypeSelectAnswer.A, value: "Quân đội Pháp" },
            { key: TypeSelectAnswer.B, value: "Quân đội Mỹ" },
            { key: TypeSelectAnswer.C, value: "Quân đội Việt Minh" },
            { key: TypeSelectAnswer.D, value: "Liên quân Quốc tế" },
        ],
        correctAnswer: TypeSelectAnswer.D,
    },
    {
        question:
            "Một trong những kết quả quan trọng của Tấn Công trong chiến dịch Điện Biên Phủ là gì?",
        answers: [
            { key: TypeSelectAnswer.A, value: "Thành lập chính phủ mới" },
            { key: TypeSelectAnswer.B, value: "Ký kết hòa bình" },
            {
                key: TypeSelectAnswer.C,
                value: "Chiếm lĩnh được các vị trí chiến lược",
            },
            { key: TypeSelectAnswer.D, value: "Tăng cường quân số" },
        ],
        correctAnswer: TypeSelectAnswer.C,
    },
]
const MindmapEditorLayout = () => {
    const [isOpen, setOpen] = useState(false)
    const [isQuizOpen, setQuizOpen] = useState(false)

    return (
        <AuthPage>
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
                    classname="max-w-3xl"
                    isOpen={isQuizOpen}
                    setIsOpen={setQuizOpen}
                    title="Play Quiz"
                >
                    <PlayQuiz sentences={sentences} />
                </Modal>
            )}
        </AuthPage>
    )
}

export default MindmapEditorLayout
