import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodoHandler(todo) {
    setTodoList((currentTodoList) =>
     [...currentTodoList,
      {text : todo, id: Math.random().toString()}
    ]);
  }

  return (
    <View style={styles.container}>
      <TaskInput onAddTodo={addTodoHandler} />
      <FlatList
        data={todoList}
        renderItem={(itemData) => {
          return(
          // Framing with views to have border-radius on both IOS-Android
          <View style={styles.todo}>
            <Text style={styles.todoText}>{itemData.item.text}</Text>
          </View>
          )}}
          keyExtractor={(item, index) => {
            return item.id;
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  todo: {
    backgroundColor: "#5e0acc",
    margin: 8,
    padding: 8,
    borderRadius: 8,
  },
  todoText: {
    color: "white",
  },
});
