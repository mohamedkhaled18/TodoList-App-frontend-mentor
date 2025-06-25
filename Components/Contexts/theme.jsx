import { createContext, useState } from "react";

export const themeContext = createContext();

const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("Theme");
    return savedTheme ? savedTheme : 'light';
  });

  return (
    <themeContext.Provider value={ {theme, setTheme} }>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider;