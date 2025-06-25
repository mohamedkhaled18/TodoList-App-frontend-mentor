import { themeContext } from "./Contexts/theme";
import { useContext } from "react";
const Background = () => {

  const { theme } = useContext(themeContext);

  return (
    <div style={{
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
      className="w-screen min-h-[calc(1/3*100vh)]
        [background-image:var(--backgroundImage-mobile)] md:[background-image:var(--backgroundImage-desktop)]">
    </div>
  )
}

export default Background;