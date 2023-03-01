import { createContext, useState } from "react";

const LogContext = createContext(null);
export {LogContext};

const LogProvider = ({children}) => {
    const [log, setLog] = useState('in')
    return(
        <LogContext.Provider value={{log, setLog}}>
            {children}
        </LogContext.Provider>
    )
}

export default LogProvider;