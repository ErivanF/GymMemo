import { createContext, ReactNode, useContext, useState } from "react";
import { IExercise } from "../../Interfaces";

interface ListProviderProps {
  children: ReactNode;
}
interface IListContext {
  get: IExercise[];
  getOne: (i: number) => IExercise;
  add: (exercise: IExercise) => void;
  change: (i: number, changes: Partial<IExercise>) => void;
  remove: (i: number) => void;
}
const ListContext = createContext<IListContext>({} as IListContext);
const ListProvider = ({ children }: ListProviderProps) => {
  const [list, setList] = useState<IExercise[]>([
    {
      name: "crucifixo máquina",
      load: 50,
      unit: "kg",
      increment: 5,
    },
  ]);
  const get = () => list;
  const getOne = (i: number) => list[i];
  const add = (exercise: IExercise) => setList([...list, exercise]);
  const change = (i: number, changes: Partial<IExercise>) => {
    const newList = [...list];
    newList[i] = { ...newList[i], ...changes };
    setList(newList);
  };
  const remove = (i: number) => setList(list.filter((_, index) => index !== i));

  return (
    <ListContext.Provider value={{ get: get(), add, getOne, change, remove }}>
      {children}
    </ListContext.Provider>
  );
};
export const UseList = () => useContext(ListContext);
export default ListProvider;
