import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ExerciseCard from "../../Components/ExerciseCard";
import { useTheme } from "../../Providers/ThemeProvider";
import { UseList } from "../../Providers/ListProvider";
import { useEffect, useState } from "react";
import CreateExerciseModal from "../../Components/CreateExerciseModal";
import React from "react";
import { INavigationProps } from "../../Interfaces";

const ExerciseList = ({ navigation }: INavigationProps) => {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme().get;
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return null;
    });
  }, []);
  const toExercise = (index: number) => {
    navigation.push("Exercise", { index: index });
  };
  const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      backgroundColor: theme.background2,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      flex: 1,
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
          <Text style={styles.createNewText}>Create new exercise</Text>
        </View>
      </TouchableWithoutFeedback>
      {list && list.length ? (
        list.map((exercise, index) => (
          <TouchableOpacity
            onPress={() => {
              console.log("exercise");
            }}
          >
            <ExerciseCard
              index={index}
              exercise={exercise}
              toExercise={toExercise}
              key={Math.random()}
            />
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.createNewText}>
          There are no exercises, create a new exercise clicking on the button
          above
        </Text>
      )}
      <CreateExerciseModal showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
};

export default ExerciseList;
