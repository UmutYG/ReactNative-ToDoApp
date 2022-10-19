import { useState } from "react";
import { StyleSheet, View, Button} from "react-native";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addTaskHandler(task) {
    setTaskList((currentTaskList) => [
      ...currentTaskList,
      { text: task, id: Math.random().toString() },
    ]);
    setIsModalVisible(false);
  }

  function deleteTaskHandler(id) {
    setTaskList((currentTaskList) =>
      currentTaskList.filter((task) => task.id !== id)
    );
  }

  function activateAddTaskHandler(){
    setIsModalVisible(true);
  }

  function deActivateAddTaskHandler(){
    setIsModalVisible(false);
  }

  return (
    <>
      <View style={styles.container}>
      <Button title="Add New Todo" color="#5e0acc" onPress={activateAddTaskHandler}/>
        <TaskInput isModalVisible={isModalVisible} onAddTask={addTaskHandler} onCancel={deActivateAddTaskHandler}  />
        <TaskList taskList={taskList} onDelete={deleteTaskHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 24
  },
});
