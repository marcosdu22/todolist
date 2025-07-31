import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type ThemeContextType = {
    theme: boolean
    setTheme: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({children} : {children:ReactNode}) => {

    const [theme, setTheme] = useState(false)
    
    return (

    <ThemeContext.Provider value={ {theme, setTheme} }>{children}</ThemeContext.Provider>

        )
}