// create a new context
import { createContext, useState } from "react"

export const GlobalContext =createContext(null)

//create the global state that recive component as a children
function GlobalState({children}){
    const [theme,setTheme]=useState('light')
    return <GlobalContext.Provider value={{theme,setTheme}}>{children}</GlobalContext.Provider>
}
export default GlobalState;
 