import { useState } from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";

function TaskInput(props) {
  const [input, setInput] = useState("");

  const onChangeInput = (text) => setInput(text);

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeInput}
          placeholder="New Task"
        >
        </TextInput>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button onPress={props.onCancel} title="Cancel" />
            </View>
            <View style={styles.button}>
              <Button onPress={props.onAddTask.bind(this, input)} title="Add" />
            </View>
          </View>
      </View>
      
    </Modal>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 10,
    marginHorizontal: 25,
    justifyContent: "center",
    alignItems : "center"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 8,
    padding: 8,
    width : '100%',
    flexDirection : "row",
    justifyContent: "center", 
  },
  button : {
    marginHorizontal : 4,
    width : 100
  }
});
