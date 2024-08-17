import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ExerciseCard from "../ExerciseCard";
import { useTheme } from "../../Providers/ThemeProvider";
import { UseList } from "../../Providers/ListProvider";
import { useEffect, useState } from "react";
import CreateExerciseModal from "../CreateExerciseModal";

const ExerciseList = () => {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme().get;
  const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      backgroundColor: theme.background2,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      width: "auto",
    },

    createNew: {
      marginTop: 16,
      marginBottom: 16,
      marginLeft: 16,
      backgroundColor: theme.background2,
      padding: 16,
      borderRadius: 8,
      width: "auto",
      alignItems: "center",
      justifyContent: "center",
    },
    createNewText: {
      color: theme.cardText,
    },
  });
  const list = UseList().get;
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={styles.createNew}>
          <Text style={styles.createNewText}>Criar novo exercício</Text>
        </View>
      </TouchableWithoutFeedback>
      {list.map((exercise, index) => (
        <ExerciseCard index={index} exercise={exercise} key={Math.random()} />
      ))}
      <CreateExerciseModal showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
};

export default ExerciseList;
