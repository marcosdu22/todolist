import { Post } from "@/contexts/PostContext";

type AddPost = {
    type: "add"
    payload: {
        title: string,
        body: string
    }
}

type RemovePost = {
    type: "remove"
    payload: {
        id: number
    }
}

type ReducerAction = AddPost | RemovePost

export const listReducer = (post:Post[], action: ReducerAction) => {

    switch(action.type){
        case "add":
        return [...post,{
            id: post.length,
            title: action.payload.title,
            body: action.payload.body
        }
    ]
        case "remove":
            return post.filter(p => p.id !== action.payload.id)

        default:
            return post
    }
}