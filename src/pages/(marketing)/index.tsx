import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function HomePage() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/login")
    }, [])

    return <></>
}
