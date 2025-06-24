import { themeContext } from "./Contexts/theme";
import { useContext } from "react";
const Background = () => {

  const { theme } = useContext(themeContext);

  const background = {
    light: "../public/assets/bg-desktop-light.c99caf89.jpg",
    dark: "../public/assets/bg-desktop-dark.cf72eaad.jpg"
  }

  return (
    <div 
      className={`background w-screen h-screen bg-[var(--background)]`}>
      <img className="absolute top-0 right-0 w-full" src={theme === "light" ? background.light : background.dark} alt="" />
    </div>
  )
}

export default Background;