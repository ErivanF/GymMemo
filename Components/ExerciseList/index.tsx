import { StyleSheet, View } from "react-native";
import { IExercise } from "../../Interfaces";
import ExerciseCard from "../ExerciseCard";
import { useTheme } from "../../Providers/ThemeProvider";
interface props {
  list: IExercise[];
  setList: React.Dispatch<React.SetStateAction<IExercise[]>>;
}
const ExerciseList = ({ list, setList }: props) => {
  const theme = useTheme().get;
  const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      backgroundColor: theme.listColor,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
  });

  return (
    <View style={styles.container}>
      {list.map((exercise) => (
        <ExerciseCard {...exercise} key={Math.random()} />
      ))}
    </View>
  );
};

export default ExerciseList;
