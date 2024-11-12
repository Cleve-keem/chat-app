import { createContext, useState } from "react";

export const LoadingContext = createContext();

function LoadingProvider({ children }){
    const [ isLoading, setIsLoading ] = useState(false);
    return(
        <LoadingContext.Provider value={{isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}
export default LoadingProvider;