import { createContext, useContext, useEffect, useState } from "react";
import { ProviderProps } from "../../Interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
export interface ISetsContext {
  get: () => String[];
  add: (name: String) => void;
  remove: (name: String) => void;
  change: (index: number, newName: String) => void;
}

const SetsContext = createContext<ISetsContext>({} as ISetsContext);
const SetsProvider = ({ children }: ProviderProps) => {
  const [sets, editSets] = useState<String[]>([]);
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
    return data as String[];
  };
  const get = () => sets;
  const add = (name: String) => {
    const newSetList = [...sets, name];
    editSets(newSetList);
    const json = JSON.stringify(newSetList);
    AsyncStorage.setItem("@GymMemo:sets", json);
  };
  const remove = (name: String) => {
    const newSetList = sets.filter((set) => set !== name);

    editSets(newSetList);
    AsyncStorage.setItem("@GymMemo:sets", JSON.stringify(newSetList));
    AsyncStorage.removeItem(`@GymMemo:list:${name}`);
  };
  const change = (index: number, newName: String) => {
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
