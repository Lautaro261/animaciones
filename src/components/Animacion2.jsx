import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,Animated } from "react-native";

const Animacion2 = ()=>{
    const [animadion2 ] =useState(new Animated.Value(0))

    useEffect(()=>{
        Animated.timing(
            animadion2, {
                toValue:450,  //valor al que llega
                duration:1000, // tiempo que demora en llegar al valor 
            }
        ).start()
    },[])
    return(
        <Animated.View style={[
            styles.caja,
            { 
                width: animadion2,
                height: animadion2,
            }
        ]}>
            
       
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        textAlign:'center',
    },
    caja:{
        width:100,
        height:100,
        backgroundColor:'cornflowerblue'
    }
})

export default Animacion2