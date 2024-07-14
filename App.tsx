import ListProvider from "./Providers/ListProvider";
import ThemeProvider from "./Providers/ThemeProvider";
import Main from "./Views/Main";

export default function App() {
  return (
    <ThemeProvider>
      <ListProvider>
        <Main />
      </ListProvider>
    </ThemeProvider>
  );
}
