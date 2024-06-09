'use client'
import React, { createContext, useContext, useState } from 'react'
import { ReactNode } from 'react'

export const ThemeContext = createContext({})

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>('#ffffff');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext)
}
