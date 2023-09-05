import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,Animated } from "react-native";

const Animacion3 = ()=>{
    const [animadion3 ] =useState(new Animated.Value(5))

    useEffect(()=>{
        Animated.timing(
            animadion3, {
                toValue:25,  //valor al que llega
                duration:1000, // tiempo que demora en llegar al valor 
            }
        ).start()
    },[])
    return(
        <View >
            
       <Animated.Text 
       style={[styles.text, { fontSize: animadion3}]}>
        Animacion 3
       </Animated.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        textAlign:'center',
    }
})

export default Animacion3