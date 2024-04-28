import {  StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function TodoItem({todo, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(todo.key)} >
        <Text style={styles.item}>{todo.text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})
