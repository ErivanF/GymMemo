import { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import ListProvider from "./ListProvider";
import SetsProvider from "./SetsProvider";
import React from "react";

interface IProviderProps {
  children: ReactNode;
}
const Providers = ({ children }: IProviderProps) => {
  return (
    <ThemeProvider>
      <ListProvider>
        <SetsProvider>{children}</SetsProvider>
      </ListProvider>
    </ThemeProvider>
  );
};

export default Providers;
