import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useTheme } from "../../Providers/ThemeProvider";
import { useState } from "react";
import { useSets } from "../../Providers/SetsProvider";
import CreateSetModal from "../../Components/CreateSetModal";
import { UseList } from "../../Providers/ListProvider";
import React from "react";
import { INavigationProps } from "../../Interfaces";
import Feather from "@expo/vector-icons/Feather";

const SetList = ({ navigation }: INavigationProps) => {
  const theme = useTheme().get;
  const [showModal, setShowModal] = useState(false);
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
    cardText: {
      color: theme.cardText,
    },
    placeholderText: {
      color: theme.cardText,
      marginTop: 16,
      marginBottom: 16,
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
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
  const setList = useSets().get();
  const load = UseList().load;
  const remove = useSets().remove;
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={styles.createNew}>
          <Text style={styles.createNewText}>Create a new set</Text>
        </View>
      </TouchableWithoutFeedback>
      {setList.length ? (
        setList.map((value, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                load(value);
                navigation.push("Exercises");
              }}
              key={index}
              style={styles.card}
            >
              <Text style={styles.cardText}>{value}</Text>
              <Feather
                size={25}
                name="trash-2"
                color={theme.cardText}
                onPress={() => {
                  remove(value);
                }}
              />
            </TouchableOpacity>
          );
        })
      ) : (
        <Text style={styles.placeholderText}>
          There is no set created yet. Create a new one by clicking on the
          butotn above
        </Text>
      )}
      <CreateSetModal {...{ showModal, setShowModal }} />
    </View>
  );
};

export default SetList;
