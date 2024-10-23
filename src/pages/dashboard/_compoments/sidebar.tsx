import { Settings, CreditCard, BrainCircuit, Network } from "lucide-react"

import { Link, useLocation, useParams } from "react-router-dom"
import { getLastPath } from "@/utils"

const sideBarItems = [
    {
        label: "Tất cả sơ đồ",
        icon: <Network className="h-4 w-4" />,
        href: "",
    },
    {
        label: "Cài đặt nhóm",
        icon: <Settings className="h-4 w-4" />,
        href: "settings",
    },
    {
        label: "Các gói",
        icon: <CreditCard className="h-4 w-4" />,
        href: "subscription",
    },
]

const Sidebar = () => {
    const { pathname } = useLocation()
    const { orgId } = useParams()
    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link
                        to={`/dashboard/${orgId}`}
                        className="flex items-center gap-2 font-semibold"
                    >
                        <BrainCircuit className="size-6 text-primary" />
                        <span className="">MindGPT</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {sideBarItems.map((item) => (
                            <Link
                                key={item.label}
                                to={`/dashboard/${orgId}/${item.href}`}
                                className={` flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all ${
                                    getLastPath(pathname) === item.href
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:text-primary "
                                }`}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
