import { useState } from "react"

export const ToDoGPT = () => {
    
    
    const [list, setList] = useState<string[]>([])

    const [inputValue, setInputValue] = useState('')

    const handleAddButton = () => {
        setList(prev => [...prev, inputValue])
        setInputValue('')
    }
    
    return (
        
        <div className="w-screen h-screen pt-5 flex justify-center">
            
            <div className="w-full">
                
                <div className="border-b-4 border-b-gray-500 w-[30%] mx-auto text-center py-10">
                    
                    <h1 className="text-3xl">LISTA DE TAREFAS</h1>
                
                </div>
            
                
                <div className="w-[30%] mx-auto flex justify-center py-10 border-b-4 border-b-gray-500">

                    <input type="text" className="bg-white text-black rounded-md"
                    value={inputValue}
                    onChange={(e => setInputValue(e.target.value))}
                    />

                    <button className="mx-5 rounded-md bg-blue-500 cursor-pointer p-2" onClick={handleAddButton}>ADICIONAR</button>

                </div>

                <div className="w-[30%] mx-auto my-5">

                <ul className="">
                    
                    {list.map(item => (
                        <li>{item}</li>
                    ))}
                  
                </ul>



                </div>
            
            </div>
        
        </div>

    
    )
}