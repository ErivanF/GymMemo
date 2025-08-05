import { ReactNode } from "react";

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
