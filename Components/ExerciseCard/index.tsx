import { StyleSheet, Text, View } from "react-native";
import { IExercise } from "../../Interfaces";
import { DarkTheme } from "../ThemeProvider/themes";

const ExerciseCard = (exercise: IExercise) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{exercise.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: DarkTheme.card,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    maxHeight: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  details: {
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: DarkTheme.cardText,
    marginBottom: 8,
  },
});

export default ExerciseCard;
