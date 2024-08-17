import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "../../Providers/ThemeProvider";
import { useState } from "react";
import { IExercise } from "../../Interfaces";

interface IProps {
  showModal: boolean;
  setShowModal: React.Dispatch<boolean>;
}

const CreateExerciseModal = ({ showModal, setShowModal }: IProps) => {
  const theme = useTheme().get;
  const [newExercise, setNewExercise] = useState<Partial<IExercise>>();
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
    input: {
      backgroundColor: theme.background3,
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.border,
      color: theme.cardText,
      fontSize: 16,
      width: "80%",
    },
  });

  return (
    <Modal
      visible={showModal}
      animationType="slide"
      transparent={true}
      onDismiss={() => {
        setShowModal(false);
      }}
      onRequestClose={() => setShowModal(false)}
    >
      <View style={style.container}>
        <Text style={style.title}>Criar novo exercício</Text>
        <TextInput
          style={style.input}
          placeholder="Nome do exercício"
          placeholderTextColor={theme.cardText}
          onChange={(e) => {
            setNewExercise({ ...newExercise, name: e.nativeEvent.text });
          }}
        />
        <Button
          title="Finalizar"
          onPress={() => {
            console.log(newExercise);
          }}
        />
      </View>
    </Modal>
  );
};

export default CreateExerciseModal;
