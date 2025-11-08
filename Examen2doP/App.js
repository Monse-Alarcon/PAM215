import React, {useEffect, useState} from "react"
import { StyleSheet, Text, View, ImageBackground, Animated, Easing, ScrollView } from 'react-native'

export default function App() {
 //constantes de splash
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
                     source={require('../Examen2doP/assets/frase.png')}
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
           source={require('../Examen2doP/assets/2.png')}
           resizeMode="cover"
           style={styles.backgrouns}
        
        >

    <View style={styles.container}>

      <Text style={styles.texto}>Mis Deberes</Text>
      <Text style={styles.texto2}>Fecha: 07/11/205</Text>

      <ScrollView>
        <View style={styles.containerDentro}>
          <Text style={styles.texto2}> 1. Realizar examen de React Native</Text>
          <Text style={styles.textoDentro}> Tareas: </Text>
          <Text> -Estudiar
              Descripció: 
             </Text>
          <Text> -Hacer prácticas de lo visto en clase </Text>
        </View>

        <View style={styles.containerDentro2}>
          <Text style={styles.texto2}>  2. Hacer tarea de calculo</Text>
          <Text style={styles.textoDentro}> Tareas: </Text>
          <Text> -Estudiar </Text>
          <Text> -Hacer prácticas de lo visto en clase </Text>
        </View>

        <View style={styles.containerDentro3}>
          <Text style={styles.texto2}>  3. Sacar a pasear a Tanya </Text>
          <Text style={styles.textoDentro}> Tareas: </Text>
          <Text> -Estudiar </Text>
          <Text> -Hacer prácticas de lo visto en clase </Text>
        </View>



      </ScrollView>

    </View>

   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  texto: {
    color: '#ba157bff',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center', // arriba
    justifyContent: 'center', // centro 
  },

  texto2: {
    color: '#000000ff',
    fontSize: 15,
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

    backgrouns: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
        width: '100%',
        height: '100%',

    },

      // estilos de pantalla principal
    containerDentro: {
        backgroundColor: '# rgba(158, 207, 150, 0.53)', //color de fondo
        height: 220,
        width: '90%',
        alignItems: 'center',  //alineacion de intems start(izquierda), center, end(derecha) Eje x
        justifyContent: 'center', //Eje y
        borderRadius:5,
        marginBottom:8, //espacio entre cajas
        
    },

    containerDentro2: {
        backgroundColor: '# rgba(58, 68, 148, 0.53)', //color de fondo
        height: 220,
        width: '90%',
        alignItems: 'center',  //alineacion de intems start(izquierda), center, end(derecha) Eje x
        justifyContent: 'center', //Eje y
        borderRadius:5,
        marginBottom:8, //espacio entre cajas
        
    },

    containerDentro3: {
        backgroundColor: '# rgba(107, 58, 148, 0.53)', //color de fondo
        height: 220,
        width: '90%',
        alignItems: 'center',  //alineacion de intems start(izquierda), center, end(derecha) Eje x
        justifyContent: 'center', //Eje y
        borderRadius:5,
        marginBottom:8, //espacio entre cajas
        
    },

    textoDentro: {
        color: '#000000ff',
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'right',
    },
});
