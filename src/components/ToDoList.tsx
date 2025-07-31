import { useState } from "react";

export const ToDoList = () => {


    const [list, setList] = useState<string[]>([])
    const [inputValue, setInputValue] = useState('')

    const handleAddButton = () => {
        
        if(inputValue.trim() === ''){

        } else {
            setList(prev => [...prev, inputValue])
            setInputValue('')
        }
    }

  return (
    <div className="w-screen h-screen flex justify-center bg-gray-900">

        <div className="w-[80%] h-full">

            <div className="text-center my-7">
                <h1 className="text-4xl font-bold">Lista de Tarefas</h1>
            </div>

            <div className="w-full h-[2px] bg-gray-500 my-7"></div>

            <div className="border-2 border-gray-500 p-2 rounded-xl flex justify-between text-2xl">
                
                <button onClick={handleAddButton} className="m-auto px-2 text-4xl cursor-pointer">+</button>
                
                <input 
                className="outline-none border-none w-[97%]" 
                type="text" 
                placeholder="Adicione uma tarefa"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
            
            </div>

            <div className="my-7 flex flex-col">

                  {list.map(item => (
                    <div className="bg-gray-800 w-full my-2 p-2 rounded-xl items-center flex justify-between">
                        <div className="flex items-center">
                            <input className="mx-4 scale-150" type="checkbox" name="" id=""/>
                            <span className="">{item}</span>
                       </div>

                        <button className="cursor-pointer rounded-md p-1 bg-gray-600">Deletar</button>

                    </div>
                
                    ))}
          
            </div>
  
        </div>
                 

    </div>
  )
}
