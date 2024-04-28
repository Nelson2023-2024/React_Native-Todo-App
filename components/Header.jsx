import { View, Text, StyleSheet } from 'react-native'

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header:{
    height:80,
    paddingTop:38,
    backgroundColor:'coral'
  },
  title:{
    textAlign:'center',
    fontSize:20,
    color: '#fff',
    fontWeight:'bold'
  }

})
