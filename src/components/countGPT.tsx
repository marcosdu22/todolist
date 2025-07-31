import { useState } from "react"

export const CountGPT = () => {
    
      const [count, setCount] = useState<number>(0)

  const incrementCount = () => {

    setCount(prev => prev + 1)

  }
 
  const decrementCount = () => {

    if (count > 0) {
      
      setCount(prev => prev - 1)

    } 

  }
    
    return (

    <div className="w-screen h-screen flex justify-center items-center text-9xl">

      <button className="cursor-pointer" onClick={incrementCount}>+</button>
      <div className="px-5">{count}</div>
      <button className="cursor-pointer" onClick={decrementCount}>-</button>  

    </div>

        
    )
}