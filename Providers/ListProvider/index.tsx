import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}
const ListProvider = ({ children }: ThemeProviderProps) => {
  return <>{children}</>;
};
export default ListProvider;
