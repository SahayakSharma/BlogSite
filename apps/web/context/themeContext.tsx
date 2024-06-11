'use client'
import React, { createContext, useContext, useState } from 'react'
import { ReactNode } from 'react'

export const ThemeContext = createContext({})

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme =localStorage.getItem('theme');
        
        return storedTheme? JSON.parse(storedTheme): {bgcolor:'hsl(0deg 0% 3.92%)',fontcolor:'#ffffff',shadow:'0.2px 0.2px #ffffff'};
      });

    

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext)
}
