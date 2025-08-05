import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { ProviderProps } from "../../Interfaces";
export interface ISetsContext {
  get: () => string[];
  add: (name: string) => void;
  remove: (name: string) => void;
  change: (index: number, newName: string) => void;
}

const SetsContext = createContext<ISetsContext>({} as ISetsContext);
const SetsProvider = ({ children }: ProviderProps) => {
  const [sets, editSets] = useState<string[]>([]);
  useEffect(() => {
    load().then((data) => {
      if (data) {
        editSets(data);
      } else {
        editSets([]);
      }
    });
  }, []);
  const load = async () => {
    const jsonData = AsyncStorage.getItem("@GymMemo:sets");
    if (!jsonData) {
      return [];
    }
    const data = JSON.parse((await jsonData) as string);
    return data as string[];
  };
  const get = () => sets;
  const add = (name: string) => {
    const newSetList = [...sets, name];
    editSets(newSetList);
    const json = JSON.stringify(newSetList);
    AsyncStorage.setItem("@GymMemo:sets", json);
  };
  const remove = (name: string) => {
    const newSetList = sets.filter((set) => set !== name);

    editSets(newSetList);
    AsyncStorage.setItem("@GymMemo:sets", JSON.stringify(newSetList));
    AsyncStorage.removeItem(`@GymMemo:list:${name}`);
  };
  const change = (index: number, newName: string) => {
    const newSetList = [
      ...sets.slice(0, index),
      newName,
      ...sets.slice(index + 1),
    ];
    editSets(newSetList);
    AsyncStorage.setItem("@GymMemo:sets", JSON.stringify(newSetList));
  };
  const save = () => {
    AsyncStorage.setItem("@GymMemo:sets", JSON.stringify(sets));
  };
  return (
    <SetsContext.Provider value={{ get, add, remove, change }}>
      {children}
    </SetsContext.Provider>
  );
};

export default SetsProvider;

export const useSets = () => useContext(SetsContext);
