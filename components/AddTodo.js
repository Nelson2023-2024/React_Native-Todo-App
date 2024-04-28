import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";


export default  function AddTodo() {

    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

  return (
    <View>
        <TextInput
        style={styles.input}
        placeholder="new todo ..."
        onChangeText={changeHandler}
        />
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
