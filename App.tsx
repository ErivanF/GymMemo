import ThemeProvider from "./Components/ThemeProvider";
import Main from "./Views/Main";

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
