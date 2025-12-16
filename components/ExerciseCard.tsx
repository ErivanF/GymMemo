import { IExercise } from "@/Interfaces";
import { Text, View } from "react-native";
// import "../global.css"
interface IProps {
  exercise: IExercise
}
export default function ExerciseCard({ exercise }: IProps) {
  return <View
    className="m-3 border-2 rounded-md p-1 border-purple-950 bg-purple-900 flex flex-row justify-between">
    <View>
      <Text className="text-white font-bold text-2xl">
        {exercise.name}
      </Text>
      {exercise.notes && <Text className="text-white font-light mt-2">
        {exercise.notes}
      </Text>}
    </View>
    <View>
      {exercise.series.map((i) => <Text key={Math.random()} className="text-white font-semibold">
        {i.reps} X {i.load}
      </Text>)}
    </View>
  </View>
}
