import React, { useState } from "react";
import { View, StyleSheet,Animated, Text, TouchableWithoutFeedback } from "react-native";

const Animacion5 = ()=>{
    const [animadion5]=useState(new Animated.Value(1))

    const presionarBtn=()=>{
        console.log('hola')
        Animated.spring(animadion5, {
            toValue:8,

        }).start()
    }

    const soltarBtn=()=>{
        Animated.spring(animadion5, {
            toValue:1,
            friction:4, // rebote
            tension:10
        }).start()
    }

    const estilosAnimaicon = {
        transform: [{scale:.8}]
    }

    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback
            onPressIn={()=>presionarBtn()}
            onPressOut={()=>soltarBtn()} 
            >
                <Animated.View style={[styles.btn, estilosAnimaicon]}>

                <Text style={styles.text}>Iniciar sesion </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    btn:{
        backgroundColor:'#9e0a85',
        width:200,
        height:200,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#fff',
        fontSize:20,
    }
})

export default Animacion5