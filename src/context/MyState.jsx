import React, { createContext, useEffect, useRef, useState } from 'react'
export const MyContext = createContext()
const MyState = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true)

    if (darkMode) {
        document.documentElement.style.setProperty("--background", "#1f242d")
        document.documentElement.style.setProperty("--color", "#fff")
        document.documentElement.style.setProperty("--main-color", "#0ef")
        document.documentElement.style.setProperty("--second-color", "#323946")
    }

    else {
        document.documentElement.style.setProperty("--background", "#def7ff")
        document.documentElement.style.setProperty("--color", "#000")
        document.documentElement.style.setProperty("--main-color", "#1bbdc9")
        document.documentElement.style.setProperty("--second-color", "#bddbe4")
    }


    return (
        <MyContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState
