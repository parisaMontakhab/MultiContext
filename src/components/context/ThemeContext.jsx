import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState("light");
  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
 ;
}

 export function useTheme (){
   const context = useContext(ThemeContext);
   if(context === undefined) throw new Error ("ThemeContext was used outside of ThemeProvider")

   return context;
}