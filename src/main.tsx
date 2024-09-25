import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import HomePage from "./pages"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={routers} />
    </StrictMode>
)
