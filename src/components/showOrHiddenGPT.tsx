import { useState } from "react"

export const ShowOrHiddenGPT = () => {

    const [showOrHidden, setShowOrHidden] = useState(true)
    
    const handleButton = () => {
        setShowOrHidden(!showOrHidden)
    }
    
    return (

        <div className="w-screen h-screen flex justify-center">

            <div>
   
                    <h1 className="text-4xl my-10">Exercício - Mostrar/Esconder texto</h1>

                    <div className="flex items-center">
                        
                    {showOrHidden && 

                        <h1 className="">Clique no botão para esconder o texto</h1>

                    }
                        
                    <button className="mx-5 bg-blue-500 rounded-md cursor-pointer p-3" onClick={handleButton}>CLIQUE EM MIM</button>
                
                </div>

            </div>

        </div>



    )

}