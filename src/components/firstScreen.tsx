import { ChatContext } from "@/contexts/ChatContext"
import { useContext, useState } from "react"

export const FirstScreen = () => {

    const [showDisplay, setShowDisplay] = useState(false)
    
    
    const chatCtx = useContext(ChatContext)
    
    const handleChatAction = () => {
        console.log(chatCtx?.user)
    }
    
    return (

        <div className="w-screen h-screen flex justify-center">

            <div className="h-full w-[25%]">
                
                <div className="w-full h-full">
                    <div className="flex justify-center py-5"><h1 className="text-3xl">Chat simples</h1></div>
                        
                    {!showDisplay && 
                    
                    <div className="text-2xl">
                        <h1 className="pb-5">Qual é o seu nome ?</h1>
                        
                        <div>
                            <input type="text" placeholder="Digite o seu nome" className="p-2 bg-white border border-gray-500 rounded-md mr-3 text-black" 
                            onChange={e => chatCtx?.setUser(e.target.value)}
                            />
                            
                            <button className="p-2 rounded-md cursor-pointer bg-blue-500" onClick={handleChatAction}>Iniciar chat</button>
                        </div>

                    </div>
                    }

                    {showDisplay &&
                    <div className="w-full h-[50%] border border-gray-500">
                        <div className="w-full h-full  rounded-md">
                        

                        </div>
                        
                        <input type="text" className="w-full border border-gray-500 p-1" placeholder={`${chatCtx?.user}, digite uma mensagem, e depois aperte enter`}/>
                        <input type="text" className="w-full border border-gray-500 p-1" placeholder="bot, digite uma mensagem, e depois aperte enter"/>

                    </div>
                    
                    
                    
                    }

                </div>
           
            </div>

        </div>


    )


}