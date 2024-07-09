import { ReactNode, createContext, useContext, useState } from "react";
import { DarkTheme } from "./themes";
import { colorTheme } from "../../Interfaces";

interface IThemeContext {
  change: () => void;
  get: colorTheme;
}
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = DarkTheme;
  const changeTheme = () => {
    return undefined;
  };
  return (
    <ThemeContext.Provider value={{ change: changeTheme, get: theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context.get) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
