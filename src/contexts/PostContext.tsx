import { listReducer } from "@/reducers/ReducerContext";
import { createContext, ReactNode, useReducer, useState } from "react";

export type Post = {
    id: number
    title: string
    body: string
}
type PostContextType = {
    post: Post[]
    setPost: React.Dispatch<React.SetStateAction<Post[]>>
}   
export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({children} : {children: ReactNode}) => {
    
    const [posts, dispatch] = useReducer(listReducer, [])



 

    return (
        <PostContext.Provider value={ {posts, setPost} }>{children}</PostContext.Provider>
    )
}

