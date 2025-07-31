import { useState } from "react"

export const QuizGPT = () => {
    
    const questions = [
        {question: [
            'Pedro Álvares Cabral',
            'Pelé',
            'Justin Bieber',
            'Leonardo da Vinci'
        ],
        answer: 0
    },
        
    ]
    
    const [answerVerification, setAnswerVerification] = useState(false)
    
    const handleAnswerButton = (index: number) => {
        
      if(questions[0].answer === index){
        setAnswerVerification(true)
      }
       
    }
    
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            
            <div className="w-[400px] h-[600px] bg-red-500">
                
                <div className="w-full text-center my-5">
                    
                    <h1 className="text-3xl">Quem descobriu o Brasil ?</h1>

                </div>

            <div className="w-full h-[4px] bg-gray-500"></div>

                <div className="m-5">

                    <ul>
                       {questions[0].question.map((item, index) => (
                        <li key={index}><button onClick={() => {handleAnswerButton(index)}} 
                        className={`cursor-pointer my-2 rounded-md bg-blue-500 p-2 w-[100%] text-start ${answerVerification ? 'bg-green-500' : '' }`}>{item}</button></li>
                       ))}
                    </ul>


                </div>
            
            
            
            
            </div>


        </div>
    )
}