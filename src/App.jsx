import Background from "../Components/Background";
import Container from "../Components/Container";
import ThemeProvider from "../Components/Contexts/theme";

const App = () => {

  return (
    <div className="todo-main grid place-items-center" >
      <ThemeProvider>
          <Background />
          <Container />
      </ThemeProvider>
    </div>
  )
}

export default App;