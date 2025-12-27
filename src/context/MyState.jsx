import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

const MyState = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
        }
    }, [darkMode])

    return (
        <MyContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState
