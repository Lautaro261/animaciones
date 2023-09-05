import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,Animated } from "react-native";

const Animacion4 = ()=>{
    const [animadion4 ] =useState(new Animated.Value(0))

    useEffect(()=>{
        Animated.timing(
            animadion4, {
                toValue:360,  //valor al que llega
                duration:1000, // tiempo que demora en llegar al valor 
            }
        ).start()
    },[])

    const interpolacion = animadion4.interpolate({
        inputRange:[0, 360],
        outputRange: ['0deg','360deg']
    }) 

    const estilosAnimacion = {
        transform: [{ rotate: interpolacion}]
    }


    return(
        <View >
            
       <Animated.View
       style={[styles.box, estilosAnimacion]}>
       </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        width:100,
        height:100,
        backgroundColor:'#08e78a'
    }
})

export default Animacion4