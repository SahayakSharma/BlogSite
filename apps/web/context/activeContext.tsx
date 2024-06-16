"use client";
import React, { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

const ActiveContext = createContext(null as any);

export const ActiveProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [active, setActive] = useState("Dashboard");
  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

export const useActive = () => {
  return useContext(ActiveContext);
};
