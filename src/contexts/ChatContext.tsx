import { createContext, ReactNode, useState } from "react";

type ChatContextType = {
    user: string
    setUser: (n: string) => void
}

export const ChatContext = createContext<ChatContextType | null>(null)

export const ChatProvider = ({children} : {children: ReactNode}) => {
    
    const [user, setUser] = useState('')
    
    return (
        <ChatContext.Provider value={ {user, setUser} }> {children} </ChatContext.Provider>

    )
}
