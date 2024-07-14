import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { IExercise } from "../../Interfaces";
import { useTheme } from "../../Providers/ThemeProvider";
import { UseList } from "../../Providers/ListProvider";

interface IProps {
  exercise: IExercise;
  index: number;
}

const ExerciseCard = ({ exercise, index }: IProps) => {
  const theme = useTheme().get;
  const { change } = UseList();
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
    button: {
      backgroundColor: theme.listColor,
      alignSelf: "flex-end",
      justifyContent: "center",
      padding: 8,
      borderRadius: 4,
      textAlign: "center",
      color: theme.text,
    },
  });
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{exercise.name}</Text>
      <Text style={styles.load}>
        {exercise.load} {exercise.unit}
      </Text>
      <TouchableWithoutFeedback
        onPress={() => {
          const load = exercise.load + exercise.increment;
          change(index, { load });
        }}
      >
        <View style={styles.button}>
          <Text style={{ color: theme.cardText }}>+{exercise.increment}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ExerciseCard;
