import React from "react";
import { View, Text, StyleSheet } from "react-native";
//import Animacion from "./src/components/Animacion";
//import Animacion2 from "./src/components/Animacion2";
//import Animacion3 from "./src/components/Animacion3";
//import Animacion4 from "./src/components/Animacion4";
import Animacion5 from "./src/components/Animacion5";

const App = ()=>{

  return(
    <View style={styles.container}> 
      <Animacion5/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin:100,
  }
})

export default App