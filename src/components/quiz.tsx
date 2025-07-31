import { question } from "@/data/question"
import { useState } from "react"


export const Quiz = () => {
 
    const [correctAnswer, setCorrectAnswer] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const cloneQuestion = question.map(q => ({

    ...q,
    correctItem: false      


    }))
    
    
    
    const handleClickList = (index: any, answer: any) => {

      if (selectedAnswer === null){
        setSelectedAnswer(index)
      }
      
    

}
        
       return (

        <div className="w-screen h-screen bg-blue-800 flex justify-center items-center">
            <div className="bg-white text-black w-100 h-100">
                <h1 className="m-5">Quiz de Culinária</h1>
                <div className="border"></div>
                <div>
                {question.map((item) => (
                    
                    <div className="">
                    <h1 className="m-5">{`${item.id}. ${item.question}`}</h1>
                    <ul className="">
                    
                    {item.option.map((option, index) => (

                        <li
                        
                        key={index} 
                        className={`m-5 bg-blue-100 
                            
                            ${selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer hover:opacity-60'}
                            ${selectedAnswer !== null && selectedAnswer === item.answer && selectedAnswer === index && 'bg-green-100'}
                            ${selectedAnswer !== null && selectedAnswer !== item.answer && selectedAnswer === index && 'bg-red-100'}

                            `} 
                        onClick={() => { handleClickList(index, item.answer) }}>{option}
                        
                    </li>


                    ))}
                        



                 

                    </ul>

                <div className="mt-5 border"></div>

                <div>
           
                    <p className="m-5">{`${item.id} de ${question.length} perguntas`}</p>
                
                </div>
                
                </div>
        
                ))}

                </div>

            </div>
        </div>
    
    )


}
//className="m-5 bg-blue-100 cursor-pointer"