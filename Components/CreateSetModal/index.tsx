import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useTheme } from "../../Providers/ThemeProvider";
import { useState } from "react";
import { useSets } from "../../Providers/SetsProvider";
import React from "react";

interface IProps {
  showModal: boolean;
  setShowModal: React.Dispatch<boolean>;
}
interface IErrors {
  name?: string;
}

const CreateSetModal = ({ showModal, setShowModal }: IProps) => {
  const theme = useTheme().get;
  const [errors, setErrors] = useState<IErrors>();
  const [name, setName] = useState<String>();
  const addSet = useSets().add;
  const list = useSets().get();
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
      height: 60,
      flex: 1,
      margin: 20,
      alignItems: "center",
      justifyContent: "center",
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
    error: {
      color: "red",
      marginBottom: 5,
    },

    submitButton: {
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
  });

  const submit = () => {
    if (!name) {
      setErrors({
        name: "Insert a name",
      });
      return;
    }
    console.log(name);
    console.log(list);
    if (list.some((item) => item === name)) {
      setErrors({
        name: "There is already a set with this name",
      });
      return;
    }
    console.log("Submit");
    addSet(name);
    setName("");
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
      onRequestClose={() => setShowModal(false)}
    >
      <View style={style.container}>
        <Text style={style.title}>Create new set</Text>
        <TextInput
          style={style.input}
          placeholder="Set name"
          placeholderTextColor={theme.cardText}
          onChange={(e) => {
            setName(e.nativeEvent.text);
          }}
        />
        {errors?.name && <Text style={style.error}>{errors.name}</Text>}

        <TouchableOpacity
          style={style.submitButton}
          onPress={() => {
            submit();
          }}
        >
          <Text style={style.text}>Create</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CreateSetModal;
