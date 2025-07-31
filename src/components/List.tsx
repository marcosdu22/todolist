import { PostContext } from "@/contexts/PostContext"
import { useContext, useReducer } from "react"



export const List = () => {
    
    const postCtx = useContext(PostContext)
    
       
    return (

        
        
        <div>

                <ul>
                    {postCtx?.post.map( (item) => (
                        <li>
                            <strong>{item.title}</strong>
                            <p>{item.body}</p>
                        </li>
                        
                    ) )}
                </ul>




        </div>



    )
}