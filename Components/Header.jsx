import { useEffect } from "react";

const Header = ({ theme, setTheme }) => {

  const themeIcon = {
    light: "🌙",
    dark: "☀️",
  }
  
  useEffect(() => {
    localStorage.setItem("Theme", theme);
    document.body.id = theme;
  }, [theme]);
  

  const currentIcon = theme === 'light'? themeIcon.light : themeIcon.dark;

  return(
    <div className="todoList-header flex justify-between items-center my-1">
      <h2 className="tracking-[10px] font-semibold text-4xl text-white uppercase">ToDo</h2>
      <div className="theme-icon cursor-pointer" onClick={() => 
        {
          setTheme(prevTheme => {
            const theme = prevTheme === 'light'? 'dark' : 'light';
            document.body.id = theme;
            return theme;
          });
        }}>
        
          <p className="theme_icon text-4xl">{currentIcon}</p>
      </div>
    </div>
  )
}

export default Header;