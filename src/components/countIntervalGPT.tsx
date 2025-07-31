import { useEffect, useState } from "react"

export const CountIntervalGPT = () => {
    
    const [statusCount, setStatusCount] = useState(false)
    
    const [n,setN] = useState(1)
 
    const handleCountButton = () => {
        
        
        useEffect(() => {
                if(statusCount === false)  {
                
                    setInterval(() => {
                        setN(prev => prev + 1)
                    }, 1000)

            } else {

            }
        }, [n])

    }

    return (
        
        <div className="w-screen h-screen flex justify-center items-center">

            <div className="flex text-3xl">
                <h1>{n}</h1>
                <button onClick={handleCountButton} className="rounded-md bg-green-500 mx-5 cursor-pointer">{statusCount ? 'Parar Contador' : 'Iniciar Contador'}</button>
            </div>

        </div>
    
    )
}