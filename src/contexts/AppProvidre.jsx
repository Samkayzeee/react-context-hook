import { createContext } from "react"


const AppContext = createContext(null);

const AppProvider = ({children}) => {
    return(
        <AppContext.Provider value={"Log In"}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext};
export default AppProvider;