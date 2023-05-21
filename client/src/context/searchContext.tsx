import {createContext, useState, useEffect} from 'react'



export const QueryContext = createContext({} as any)

export const QueryProvider = ({children}: any) => {
    const [query, setQuery] = useState("" as string);

    return (
        <QueryContext.Provider value={{query, setQuery}}>
            {children}
        </QueryContext.Provider>
    )
}