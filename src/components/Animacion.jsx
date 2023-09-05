import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,Animated } from "react-native";

const Animacion = ()=>{
    const [animadion1 ] =useState(new Animated.Value(0))

    useEffect(()=>{
        Animated.timing(
            animadion1, {
                toValue:1,  //valor al que llega
                duration:1000, // tiempo que demora en llegar al valor 
            }
        ).start()
    },[])
    return(
        <Animated.View style={{
            opacity: animadion1,
        }}>
            
       <Text style={styles.text}>
        Animacion 1
       </Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        textAlign:'center',
    }
})

export default Animacion