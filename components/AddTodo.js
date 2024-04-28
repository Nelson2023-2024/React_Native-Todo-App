import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";


export default  function AddTodo({submitHandler}) {

    const [text, setText] = useState('')

    const changeHandler = (inputvalue) => {
        setText(inputvalue)
    }

  return (
    <View>
        <TextInput
        style={styles.input}
        placeholder="new todo ..."
        onChangeText={(inputvalue)=>changeHandler(inputvalue)}
        
        />
        <Text>{text}</Text>
        <Button onPress={() => submitHandler(text)} title="Add" color={'coral'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
       height: 45,
       borderBottomWidth:1,
       borderBottomColor:'#ddd',
       borderColor: 'gray',
       borderWidth: 1,
       paddingHorizontal: 8,
       paddingVertical:6,
       marginBottom: 10,
       borderRadius:10
       
    }
   });
