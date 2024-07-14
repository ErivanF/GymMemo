import ThemeProvider from "./Providers/ThemeProvider";
import Main from "./Views/Main";

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
