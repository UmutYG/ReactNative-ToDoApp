import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addTaskHandler(task) {
    setTaskList((currentTaskList) => [
      ...currentTaskList,
      { text: task, id: Math.random().toString() },
    ]);
  }

  function deleteTaskHandler(id) {
    setTaskList((currentTaskList) =>
      currentTaskList.filter((task) => task.id !== id)
    );
  }

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTaskHandler} />
      <TaskList taskList={taskList} onDelete={deleteTaskHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    flexDirection: "column",
  },
});
