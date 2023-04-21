import { useLayoutEffect } from "react"
import { useState } from "react"

export const useTheme = () => {
    const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
    const defaultTheme = isDarkTheme ? 'dark' : 'light'  

    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme)
    
    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme', theme)
    }, [theme])

    return { theme, setTheme }

}


// const theme = {
//     isDarkMode: false, // set this to true or false based on your preference
//     colors: {
//       primary: "#007bff",
//       secondary: "#6c757d",
//       success: "#28a745",
//       danger: "#dc3545",
//       warning: "#ffc107",
//       info: "#17a2b8",
//       light: "#f8f9fa",
//       dark: "#343a40",
//     },
//   };
  
//   export default theme;
  