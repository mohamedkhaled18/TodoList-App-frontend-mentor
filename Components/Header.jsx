
const Header = ({ theme, setTheme }) => {

  const themeIcon = {
    light: "../public/assets/icon-moon.dadf6d0a.svg",
    dark: "public/assets/icon-sun.fc80f87a.svg",
  }

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
        
          <img src={currentIcon} alt="theme_icon" />
      </div>
    </div>
  )
}

export default Header;