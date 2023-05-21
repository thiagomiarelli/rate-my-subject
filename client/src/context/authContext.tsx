import React, {createContext, useState, useEffect} from 'react'

type student = {
    id: string;
    name: string;
    course: string;
    email: string;
    university: string;
    term: string;
    password: string;
    created_at: string;
}


export const AuthContext = createContext({} as any)

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState({} as student || null)
    const [auth, setAuth] = useState(false)


    return (
        <AuthContext.Provider value={{auth, setAuth, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}