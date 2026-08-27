// Here will be created the main logics of the Student Manager App

import { createContext } from "react";

export const StudentContext = createContext();

export function StudentProvider({children}){
    return (
        <StudentContext.Provider value={{

        }}>
            {children}
        </StudentContext.Provider>
    )
}
