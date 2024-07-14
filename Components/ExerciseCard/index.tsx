import { StyleSheet, Text, View } from "react-native";
import { IExercise } from "../../Interfaces";
import { useTheme } from "../../Providers/ThemeProvider";

const ExerciseCard = (exercise: IExercise) => {
  const theme = useTheme().get;
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.card,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      maxHeight: "auto",
      alignContent: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 8,
    },
    details: {
      marginBottom: 16,
    },
    name: {
      fontSize: 16,
      color: theme.cardText,
      marginBottom: 8,
    },
    load: {
      fontSize: 18,
      color: theme.cardText,
      marginBottom: 8,
    },
  });
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{exercise.name}</Text>
      <Text style={styles.load}>
        {exercise.load} {exercise.unit}
      </Text>
    </View>
  );
};

export default ExerciseCard;
