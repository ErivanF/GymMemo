import { View } from "react-native";
import ExerciseCard from "../components/ExerciseCard";
import { IExercise } from "@/Interfaces";
import "../global.css"
export default function Index() {
  const testExercise: IExercise = {
    name: "Supino",
    series: [
      {
        load: "15 kg",
        reps: 13
      }
    ],
    notes: "inclinado",
  }
  return (
    <View className="">
      <ExerciseCard exercise={testExercise} />
    </View>
  );
}
