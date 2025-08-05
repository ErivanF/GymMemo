import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useState } from "react";
import { IExercise, ProviderProps } from "../../Interfaces";
interface IListContext {
  get: IExercise[];
  getOne: (i: number) => IExercise;
  add: (exercise: IExercise) => void;
  change: (i: number, changes: Partial<IExercise>) => void;
  remove: (i: number) => void;
  name?: string;
  load: (name: string) => Promise<void>;
}
const ListContext = createContext<IListContext>({} as IListContext);
const ListProvider = ({ children }: ProviderProps) => {
  const [listName, setName] = useState<string>("");
  const [list, setList] = useState<IExercise[]>([]);
  const load = async (name: string) => {
    setName(name);
    const jsonData = AsyncStorage.getItem(`@GymMemo:list:${name}`);
    if ((await jsonData) === null) {
      setList([]);
      save([]);
    } else {
      const data = JSON.parse((await jsonData) as string);
      setList(data as IExercise[]);
    }
    setName(name);
  };
  const get = () => list;
  const getOne = (i: number) => list[i];

  const add = (exercise: IExercise) => {
    const newList = [...list, exercise];
    save(newList);
  };
  const change = (i: number, changes: Partial<IExercise>) => {
    const newList = [...list];
    newList[i] = { ...newList[i], ...changes };
    save(newList);
  };
  const remove = (i: number) => {
    const newList = list.filter((_, index) => index !== i);
    save(newList);
  };
  const save = (newList: IExercise[]) => {
    setList(newList);
    AsyncStorage.setItem(`@GymMemo:list:${listName}`, JSON.stringify(newList));
  };
  return (
    <ListContext.Provider
      value={{
        get: get(),
        add,
        getOne,
        change,
        remove,
        name: listName,
        load,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
export const UseList = () => useContext(ListContext);
export default ListProvider;
