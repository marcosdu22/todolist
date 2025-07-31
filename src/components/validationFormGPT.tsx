import { useState } from "react"

export const ValidationFormGPT = () => {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')
    
    const handleFormButton = () => {

        if(email.trim() === '' && password.trim() === ''){
            alert("Preencha o email e senha")
        } else if(email.trim() === ''){
            alert('Preencha o email')
        } else if(password.trim() === ''){
            alert('Preencha a senha')
        } else {
            alert('Dados enviados com sucesso!')
        }

    }
    
    return (

        <div className="w-screen h-screen flex items-center flex-col">

            <div className="w-[35%] h-full bg-red-500">

                <div className="w-full flex justify-center my-5">
                    
                    <h1 className="text-3xl">Exercício - Validação de Formulário</h1>

                </div>

                <form className="flex flex-col items-center">

                    <input type="text" placeholder="Digite seu email" className="bg-white text-black rounded-md w-[60%] my-5"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input type="password" placeholder="Digite sua senha" className="bg-white text-black rounded-md w-[60%]"
                     value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                <button className="my-5 bg-blue-500 rounded-md cursor-pointer p-2" onClick = {handleFormButton}>ENVIAR</button>
                
                </form>
  
            </div>
 
        </div>

    )

}