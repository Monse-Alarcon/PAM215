import React, {useEffect, useState} from "react"
import { Text, StyleSheet, View, ImageBackground, Animated, Easing } from "react-native"

export default function ImageBaScreen() {
    const [cargando, setCargando] = useState(true);
    const desvanecido = new Animated.Value(1);

    useEffect (() => {
        const timer = setTimeout(() => {
            Animated.timing (desvanecido, {
                toValue: 0,
                duration: 800,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start(() => setCargando(false));
        
        }, 2000);
        return() => clearTimeout(timer);
    },[]);




    if(cargando){
        return (
            <Animated.View style={[styles.splashContainer, {opacity: desvanecido}]}>
                <ImageBackground
                     source={require('../assets/si.jpeg')}
                     resizeMode="contain"
                     style={styles.splashImage}
                >
                    <Text style={styles.splashText}> Cargando... </Text>
                </ImageBackground>
            </Animated.View>
        );
    }
    return (

        <ImageBackground
           source={require('../assets/locos.jpeg')}
           resizeMode="cover"
           style={styles.backgrouns}
        
        >
            <Text style={styles.texto}> Bienvenido a mi app </Text>
        </ImageBackground>
        //<View style={styles.container}>
        //    <Text> Proximamente equipo </Text>
        //</View>
    )
}

const styles = StyleSheet.create({
    backgrouns: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        width: '100%',
        height: '100%',

    },

    texto:{
        color: '#b0efedff',
        fontSize: 24,
        fontWeight: 'bold',

    },

    splashContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,

    },

    splashImage:{
        flex: 1,
        width: '100%',
        height: '100%',
    },

    splashText:{
        position: 'absolute',
        marginBottom: 60,
        fontSize: 20,
        color: '#b5dbf3ff',
    },
})