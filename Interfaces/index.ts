import { ReactNode } from "react";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

export type IExercise = {
  name: string;
  series: ISeries[];
  notes?: string;
};
export type ISeries = {
  reps: number;
  load: number;
};
export interface colorTheme {
  background: string;
  background2: string;
  background3: string;
  border: string;
  cardText: string;
}

export interface ProviderProps {
  children: ReactNode;
}
export type ParamList = {
  Sets: undefined;
  Exercises: undefined;
  Exercise: {
    index: number;
  };
};
export type INavigationProps = NativeStackScreenProps<ParamList>;
export type IExerciseProps = NativeStackScreenProps<ParamList, "Exercise">;
