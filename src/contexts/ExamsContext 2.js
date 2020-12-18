import React, { createContext, useState } from "react";

export const examsContext = createContext();

export default function ExamsProvider({ children }) {

    const [periodos, setPeriodos] = useState('');
    const [provas, setProvas] = useState('');

 

  return (
    <examsContext.Provider
      value={{
        periodos,
        setPeriodos,
        provas,
        setProvas

      }}
    >
      {children}
    </examsContext.Provider>
  );
}
