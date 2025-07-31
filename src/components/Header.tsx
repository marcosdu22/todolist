import { ThemeContext } from "@/contexts/DarkTheme"
import { useContext } from "react"

export const Header = () => {
    
    const isDark = useContext(ThemeContext)
    
    const handleThemeButton = () => {

        isDark?.setTheme(prev => !prev)
        

    }
    
    return (
        <header className={`w-screen h-screen ${isDark?.theme ? 'text-white bg-black' : 'text-black bg-white'}`}>
            <div className="pl-10 pt-10">
                <div className='pb-5'>
                    <h1>Título da Página</h1>
                    <p className="pb-5">Conteúdo da Página</p>
                    
                </div>

                <button className={`p-3 rounded-md cursor-pointer ${isDark?.theme ? 'bg-white text-black' : 'bg-black text-white'}`}>Clique Aqui</button>
                       
            </div>
        
            <div className={`p-3 ml-10 mt-50 w-40 rounded-md cursor-pointer ${isDark?.theme ? 'bg-white text-black' : 'bg-black text-white'}`}>

                <button onClick={handleThemeButton}>{
                   
                    isDark?.theme ? 'Mudar para Light' : 'Mudar para Dark'

                    }
                </button>

            </div>


        </header>



    )
}