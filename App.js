import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListView from './components/ListView';
const App=() => {
  return (
<View style={styles.container}>
<ListView/>
</View>
  );
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  }
})

export default App;