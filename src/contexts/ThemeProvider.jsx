import { createContext, useState } from "react";

const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext}
export default ThemeProvider;