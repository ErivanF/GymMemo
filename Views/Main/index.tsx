import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../Providers/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import { IExercise } from "../../Interfaces";
import { useState } from "react";
import ExerciseList from "../../Components/ExerciseList";

const Main = () => {
  const theme = useTheme().get;
  const [list, setList] = useState<IExercise[]>([
    {
      name: "crucifixo máquina",
      load: 50,
      unit: "kg",
    },
  ]);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    text: {
      color: theme.text,
      fontSize: 30,
      fontWeight: "bold",
    },
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
      <ExerciseList list={list} setList={setList} />
    </View>
  );
};
export default Main;
