import { Text, StyleSheet, View, ImageBackground, Animated, Easing, Button, TextInput, Alert, Switch } from "react-native"
import React, {useEffect, useState} from "react"

export default function ActScreen() {
    //constantes de carga y fondo
    const [cargando, setCargando] = useState(true);
    const desvanecido = new Animated.Value(1);

    //constantes de alertas
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    //constantes de switch
    const [esEncendido, cambiarEncendido] = useState(false);



    // codigo de efecto de carga
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

        // codigo de pantalla principal con introducir datos
            const mostrarAlerta = () => {
            const correoTexto = correo.trim().toLowerCase();
            const nombreTexto = nombre.trim();
            const correoValido = correoTexto.includes('@') && correoTexto.endsWith('.com');

            if (nombreTexto === '' && correoTexto === '') {
                Alert.alert('Por favor llena todos los campos');
                alert('Por favor llena todos los campos');
            } else if (nombreTexto === '') {
                Alert.alert('Falta ingresar el nombre');
                alert('Falta ingresar el nombre');
            } else if (correoTexto === '') {
                Alert.alert('Falta ingresar el correo');
                alert('Falta ingresar el correo');
            } else if (!correoValido) {
                Alert.alert('El correo debe contener "@" y terminar en ".com"');
                alert('El correo debe contener "@" y terminar en ".com"');
            } else if (!esEncendido) {
                Alert.alert('Debes aceptar los términos y condiciones');
                alert('Debes aceptar los términos y condiciones');
            } else {
                Alert.alert("Datos ingresados \n" + 
                    `Nombre: ${nombre}\nCorreo: ${correo}`
                );
                alert("Datos ingresados \n" +
                    `    Nombre: ${nombre}\n    Correo: ${correo}`
                );
            }
        }


    return (
        <ImageBackground
            source={require('../assets/fondo.png')}
            resizeMode="cover"
            style={styles.backgrouns}
                
        >

            <View style={styles.container}>
    
                <Text style={styles.texto}> Registro de usuario </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre completo "
                        value={nombre}
                        onChangeText={setNombre}
                    />
            
                    <TextInput
                        style={styles.input}
                        placeholder=" Correo electronico "
                        value={correo}
                        onChangeText={setCorreo}
                    />

                
                <Text style={styles.textoAceptar}> Aceptar terminos y condiciones</Text>
                <Switch
                    value={esEncendido}
                        onValueChange = { () => cambiarEncendido (!esEncendido)}
                        trackColor={{true: '#0da80dff', false: '#464849ff'}}
                ></Switch>

                <Button 
                    color= '#5a5957ff'
                    title="Registrarse"
                    onPress={mostrarAlerta}
                />
            
                        
            </View>

            
        </ImageBackground>
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

    // estilos de pantalla principal
    container: {
        backgroundColor: '# rgba(0,0,0,0.53)', //color de fondo
        height: 220,
        width: '90%',
        alignItems: 'center',  //alineacion de intems start(izquierda), center, end(derecha) Eje x
        justifyContent: 'center', //Eje y
        borderRadius:5,
        
    },

  

    texto:{
        marginBottom:15,
        color: '#ffffffff',
        fontSize: 20,
        fontWeight: 'bold',

    },

    input:{
        width:'85%', //ocupa el ancho disponible
        borderWidth:1.5, //grosor del borde
        borderColor:"#ffffffff", //color del borde
        borderRadius:5, //para las esquinas redondeadas
        padding:5, //espacio interno
        marginBottom:8, //espacio entre cajas
        backgroundColor:"#b7b6b6ff", //color de fondo
    },

    textoAceptar:{
        color: '#ffffffff',
        fontSize: 10,
        fontWeight: 'bold',
    },

    
})