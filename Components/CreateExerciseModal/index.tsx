import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useTheme } from "../../Providers/ThemeProvider";
import { useState } from "react";
import { IExercise } from "../../Interfaces";
import { UseList } from "../../Providers/ListProvider";
import Feather from "@expo/vector-icons/Feather";
import React from "react";

interface IProps {
  showModal: boolean;
  setShowModal: React.Dispatch<boolean>;
}
interface IErrors {
  name?: string;
}

const CreateExerciseModal = ({ showModal, setShowModal }: IProps) => {
  const theme = useTheme().get;
  const [newExercise, setNewExercise] = useState<Partial<IExercise>>({
    series: [
      {
        load: 0,
        reps: 0,
      },
    ],
  });
  const [errors, setErrors] = useState<IErrors>();
  let series = newExercise.series || [];

  const addExercise = UseList().add;
  const list = UseList().get;
  const addSeries = () => {
    setNewExercise((old) => {
      if (!old.series) {
        return { series: [{ load: 0, reps: 0 }], ...old };
      }
      return { ...old, series: [...old.series, { load: 0, reps: 0 }] };
    });
  };
  const removeSeries = (index: number) => {
    setNewExercise((old) => {
      if (!old.series) {
        return old;
      }
      return {
        ...old,
        series: old.series.filter((_, i) => i !== index),
      };
    });
  };
  const style = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      padding: 20,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      width: "90%",
      height: "auto",
      flex: 1,
      margin: 20,
      alignItems: "center",
      borderWidth: 5,
      borderColor: theme.border,
      color: theme.cardText,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 16,
      color: theme.cardText,
    },
    text: {
      marginBottom: 10,
      color: theme.cardText,
    },
    seriesCard: {
      borderWidth: 3,
      borderColor: theme.border,
      marginBottom: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: theme.background2,
      width: "95%",
      color: theme.cardText,
    },
    input: {
      backgroundColor: theme.background3,
      padding: 3,
      marginBottom: 2,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.border,
      color: theme.cardText,
      fontSize: 16,
      marginLeft: 3,
      width: "95%",
    },
    inputContainer: {
      flexGrow: 1,
      alignItems: "flex-start",
      backgroundColor: theme.background3,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.border,
      marginRight: 3,
      padding: 3,
    },
    inputText: {
      color: theme.cardText,
      fontSize: 9,
      marginBottom: 1,
    },
    inputSeries: {
      backgroundColor: theme.background3,
      padding: 3,
      color: theme.cardText,
      fontSize: 16,
      marginLeft: 3,
      width: "95%",
    },

    error: {
      color: "red",
      marginBottom: 5,
    },

    submitButton: {
      backgroundColor: theme.background2,
      alignSelf: "flex-end",
      justifyContent: "center",
      padding: 8,
      borderRadius: 4,
      textAlign: "center",
      color: theme.cardText,
    },
  });

  const submit = () => {
    if (!newExercise?.name) {
      setErrors({
        name: newExercise?.name ? "" : "Insira um nome",
      });
      return;
    }
    addExercise(newExercise as IExercise);
    setNewExercise({ series: [{ reps: 0, load: 0 }] });
    setErrors({});
    setShowModal(false);
  };
  return (
    <Modal
      visible={showModal}
      animationType="slide"
      transparent={true}
      onDismiss={() => {
        setShowModal(false);
      }}
      onRequestClose={() => {
        console.log("Lista: " + list);
        setShowModal(false);
      }}
    >
      <View style={style.container}>
        <Text style={style.title}>Create new exercise</Text>
        <TextInput
          style={style.input}
          placeholder="Exercise name"
          placeholderTextColor={theme.cardText}
          onChange={(e) => {
            setNewExercise({ ...newExercise, name: e.nativeEvent.text });
          }}
        />
        {errors?.name && <Text style={style.error}>{errors.name}</Text>}
        <View style={style.seriesCard}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={style.text}>Séries</Text>

            <Feather
              name="plus-circle"
              size={25}
              color={theme.cardText}
              onPress={() => {
                addSeries();
              }}
            />
          </View>

          {newExercise.series &&
            newExercise.series.map((_, index) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    maxWidth: "100%",
                    justifyContent: "space-evenly",
                  }}
                  key={Math.random()}
                >
                  <Text style={style.text}>{index + 1}:</Text>
                  <View style={style.inputContainer}>
                    <Text style={style.inputText}>Reps</Text>
                    <TextInput
                      style={style.inputSeries}
                      keyboardType="numeric"
                      onChange={(e) => {
                        series[index].reps = parseFloat(e.nativeEvent.text);
                      }}
                      onEndEditing={() => {
                        setNewExercise((old) => {
                          old.series = series;
                          return old;
                        });
                      }}
                    />
                  </View>
                  <View style={style.inputContainer}>
                    <Text style={style.inputText}>Load</Text>
                    <TextInput
                      style={style.inputSeries}
                      keyboardType="numeric"
                      onChange={(e) => {
                        series[index].load = parseFloat(e.nativeEvent.text);
                      }}
                      onEndEditing={() => {
                        setNewExercise((old) => {
                          old.series = series;
                          return old;
                        });
                      }}
                    />
                  </View>
                  <Feather
                    name="trash-2"
                    size={25}
                    color={theme.cardText}
                    onPress={() => {
                      removeSeries(index);
                    }}
                  />
                </View>
              );
            })}
        </View>
        <Text style={{ overflow: "visible", height: "auto", ...style.text }}>
          Aditional details
        </Text>
        <TextInput
          style={style.input}
          placeholder="Aditional details"
          placeholderTextColor={theme.cardText}
          multiline={true}
        />
        <TouchableWithoutFeedback
          style={style.submitButton}
          onPress={() => {
            submit();
          }}
        >
          <Text style={style.text}>Create</Text>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default CreateExerciseModal;
