import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import { HomePage } from "./pages/(marketing)"
import { NotFoundPage } from "./pages/404"
import DashboardLayout from "./pages/dashboard/[orgId]/layout"
import MindmapPage from "./pages/dashboard/[orgId]"
import GeneralOrgSettingPage from "./pages/dashboard/[orgId]/general-org-settings"
import MembersOrgSettingPage from "./pages/dashboard/[orgId]/members-org-settings"
import SubscriptionPage from "./pages/dashboard/[orgId]/subscription"
import MindmapEditorLayout from "./pages/editor/[mindmapId]/layout"
import MindmapEditorPage from "./pages/editor/[mindmapId]"
import CallbackPage from "./pages/(auth)/callback"
import { LoginPage } from "./pages/(auth)/login"
import NewMindmapPage from "./pages/dashboard/[orgId]/new-mindmap"
import { ProfileSettingPage } from "./pages/profile"
import UserManagement from "./pages/admin/user-management"
import { AdminLayout } from "./pages/admin/layout"
import { OrgManagement } from "./pages/admin/org-management"

const queryClient = new QueryClient()

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "auth/callback",
                element: <CallbackPage />,
            },
            {
                path: "dashboard",
                element: <Outlet />,
                children: [
                    {
                        path: ":orgId",
                        element: <DashboardLayout />,
                        children: [
                            {
                                index: true,
                                element: <MindmapPage />,
                            },
                            {
                                path: "new",
                                element: <NewMindmapPage />,
                            },
                            {
                                path: "general-settings",
                                element: <GeneralOrgSettingPage />,
                            },
                            {
                                path: "members-settings",
                                element: <MembersOrgSettingPage />,
                            },
                            {
                                path: "subscription",
                                element: <SubscriptionPage />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "editor",
                element: <Outlet />,
                children: [
                    {
                        path: ":mindmapId",
                        element: <MindmapEditorLayout />,
                        children: [
                            {
                                index: true,
                                element: <MindmapEditorPage />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "/profile",
                element: <ProfileSettingPage />,
            },
            {
                path: "admin",
                element: <AdminLayout/>,
                children: [
                    {
                        path: "users",
                        element: <UserManagement/>
                    },
                    {
                        path: "orgs",
                        element: <OrgManagement/>
                    }
                ]
            }
        ],
    },
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={routers} />
            <Toaster />
        </QueryClientProvider>
    </StrictMode>
)
