import { StyleSheet, View } from "react-native";
import ExerciseCard from "../ExerciseCard";
import { useTheme } from "../../Providers/ThemeProvider";
import { UseList } from "../../Providers/ListProvider";

const ExerciseList = () => {
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
  const list = UseList().get;
  return (
    <View style={styles.container}>
      {list.map((exercise, index) => (
        <ExerciseCard index={index} exercise={exercise} key={Math.random()} />
      ))}
    </View>
  );
};

export default ExerciseList;
