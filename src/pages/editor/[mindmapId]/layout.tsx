import { Outlet } from "react-router-dom"
import Header from "../_components/layout/Header"
import Sidebar from "../_components/layout/sidebar"
import AuthPage from "@/components/auth-page"

const MindmapEditorLayout = () => {
    return (
        <AuthPage>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow flex-row overflow-hidden">
                    <Sidebar />
                    <div className="flex-grow overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </AuthPage>
    )
}

export default MindmapEditorLayout
