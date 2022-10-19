import { useState } from 'react';
import { TextInput, View, StyleSheet, Button} from 'react-native'


function TaskInput(props)
{
  const [input, setInput] = useState('');

  const onChangeInput = text => setInput(text);
  
    return (
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} onChangeText={onChangeInput} placeholder='New Task'></TextInput>
          <Button onPress={props.onAddTask.bind(this, input)} title='Add'/>
      </View>
    );
}

export default TaskInput;

const styles = StyleSheet.create({
    inputContainer: {   
        padding : 20,
        marginHorizontal : 25,
        borderBottomWidth : 1,
        borderBottomColor : "red",
        flexDirection : 'row',
        justifyContent : 'space-between'
      },
      textInput: {
        borderWidth : 1,
        borderColor : '#cccccc',
        width: '70%',
        padding: 8
      }
});
