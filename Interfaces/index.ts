export type IExercise = {
  name: string;
  series: [ISeries];
  unit: string;
};
type ISeries = {
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
