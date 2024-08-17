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
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.background3,
      padding: 16,
      borderRadius: 12,
      marginBottom: 16,
      maxHeight: "auto",
      alignContent: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      minWidth: "90%",
      borderWidth: 1,
      borderColor: theme.border,
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
      backgroundColor: theme.background2,
      alignSelf: "flex-end",
      justifyContent: "center",
      padding: 8,
      borderRadius: 4,
      textAlign: "center",
      color: theme.cardText,
    },
  });
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{exercise.name}</Text>
    </View>
  );
};

export default ExerciseCard;
