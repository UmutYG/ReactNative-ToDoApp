import { View, Text, StyleSheet, Pressable } from "react-native";

function Task(props) {
  // Framing with views to have border-radius on both IOS-Android
  return (
    <View style={styles.task}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={props.onDelete.bind(this, props.task.id)}
        // IOS Effect styling.
        style = {({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.taskText}>{props.task.text}</Text>
      </Pressable>
    </View>
  );
}

export default Task;
const styles = StyleSheet.create({
  task: {
    backgroundColor: "#5e0acc",
    margin: 8,
    borderRadius: 8,
  },
  // IOS ripple effect.
  pressedItem: {
    opacity : 0.5
  },
  taskText: {
    padding: 8,
    color: "white",
  },
});
