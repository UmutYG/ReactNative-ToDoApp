import {FlatList, StyleSheet} from 'react-native'
import Task from './Task';

function TaskList(props){
    return(
        <FlatList
        style={styles.taskList}
        data={props.taskList}
        renderItem={(itemData) => {
          return(
            <Task task={itemData.item} onDelete={props.onDelete}></Task>
          )}}
          keyExtractor={(item, index) => {
            return item.id;
          }}
      />
    );
}


export default TaskList;
const styles = StyleSheet.create({
    taskList : {
      
        
    }
});