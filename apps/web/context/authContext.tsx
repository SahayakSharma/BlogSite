"use client"
import React from "react";
import { createContext,useState,useContext,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ReactNode } from "react";
import {auth} from '../Firebase/auth'



const AuthContext = createContext({});

export const AuthProvider:React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect((  ) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        });
        return unsubscribe;
    },[user])

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext)
}