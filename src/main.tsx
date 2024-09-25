import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { HomePage } from "./pages/(marketing)"
import { NotFoundPage } from "./pages/404"

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
        ],
    },
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={routers} />
    </StrictMode>
)
