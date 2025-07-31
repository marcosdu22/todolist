import { PostContext } from "@/contexts/PostContext"
import { useContext } from "react"

export const Footer = () => {
    
    const postCtx = useContext(PostContext)
    
    return (
        <p className="ml-5 mt-10">Há um total de: {} posts</p>
    )
}