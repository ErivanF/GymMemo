import { ReactNode } from "react";

export type ISet = {
  version: 'v1';
  data: {
    name: string;
    exerciseList: IExercise[]
  }
}
export type IExercise = {
  name: string;
  series: ISeries[];
  notes?: string;
};
export type ISeries = {
  reps: number;
  load: string;
};

export interface ProviderProps {
  children: ReactNode;
}
