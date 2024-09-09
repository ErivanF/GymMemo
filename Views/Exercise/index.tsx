import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../Providers/ThemeProvider";
import { IExerciseProps } from "../../Interfaces";
import { UseList } from "../../Providers/ListProvider";

const ExercisePage = ({ navigation, route }: IExerciseProps) => {
  const theme = useTheme().get;
  const { index } = route.params;
  const exercise = UseList().get[index];
  const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      backgroundColor: theme.background,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      flex: 1,
      color: theme.background,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
      color: theme.cardText,
      alignSelf: "center",
    },
    seriesCard: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 8,
      borderRadius: 8,
      color: theme.background,
    },
    seriesItem: {
      marginLeft: 8,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 8,
      borderRadius: 8,
      color: theme.background2,
    },
    series: {
      fontSize: 18,
      marginBottom: 8,
      color: theme.cardText,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      {exercise.series.map((serie) => (
        <View style={styles.seriesCard}>
          <View style={styles.seriesItem}>
            <Text style={styles.series}>{"Reps: " + serie.reps}</Text>
          </View>
          <View style={styles.seriesItem}>
            <Text style={styles.series}>{"Load: " + serie.load}</Text>
          </View>
        </View>
      ))}
      {exercise.notes && (
        <View style={styles.seriesCard}>
          <Text style={styles.series}>Notes:</Text>
          <Text style={styles.series}>{exercise.notes}</Text>
        </View>
      )}
    </View>
  );
};

export default ExercisePage;
