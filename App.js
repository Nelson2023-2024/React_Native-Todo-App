import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from './components/Header'
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
    { text: "Eat my supper", key: "4" },
    { text: "Eat my supper", key: "5" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      console.log(key)
     return prevTodos.filter( todo => todo.key != key)
    })
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => 
            <TodoItem todo = {item} pressHandler={pressHandler}/>
          }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list:{
    marginTop:20,
  }
});
