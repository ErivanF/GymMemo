import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../Components/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import ExerciseCard from "../../Components/ExerciseCard";
import { IExercise } from "../../Interfaces";
import { DarkTheme } from "../../Components/ThemeProvider/themes";

const Main = () => {
  const theme = useTheme().get;
  const crucifixo: IExercise = {
    name: "crucifixo máquina",
    load: 50,
    unit: "kg",
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: theme.text,
      fontSize: 30,
      fontWeight: "bold",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Começando</Text>
      <StatusBar style="auto" />
      <ExerciseCard {...crucifixo} />
    </View>
  );
};
export default Main;
