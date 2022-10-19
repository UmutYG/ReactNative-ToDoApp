import { useState } from 'react';
import { TextInput, View, StyleSheet, Button} from 'react-native'


function TaskInput(props)
{
  const [input, setInput] = useState('');

  function onChangeInput(text)
  {
    setInput(text);
  }
    return (
        <View style={styles.inputContainer}>
          <TextInput onChangeText={onChangeInput} placeholder='New Task'></TextInput>
          <Button onPress={props.onAddTodo.bind(this, input)} title='Add'/>
      </View>
    );
}

export default TaskInput;

const styles = StyleSheet.create({
    inputContainer: {
        width : '80%',
        padding : 20,
        marginHorizontal : 25,
        borderBottomWidth : 1,
        borderBottomColor : "red",
        flexDirection : 'row',
        justifyContent : 'space-between'
      }
});
