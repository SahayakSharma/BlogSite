"use client";
import React, { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
interface Theme {
  bgcolor: string;
  fontcolor: string;
  shadow: string;
}
export const ThemeContext = createContext({
  theme: {
    bgcolor: "hsl(0deg 0% 3.92%)",
    fontcolor: "#ffffff",
    shadow: "0.2px 0.2px #ffffff",
  },
  setTheme: (theme: Theme) => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(() => {
    try{
        const storedTheme = localStorage.getItem("themeforblog");

    return storedTheme
      ? JSON.parse(storedTheme)
      : {
          bgcolor: "hsl(0deg 0% 3.92%)",
          fontcolor: "#ffffff",
          shadow: "0.2px 0.2px #ffffff",
        };
    }
    catch(e){}
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
