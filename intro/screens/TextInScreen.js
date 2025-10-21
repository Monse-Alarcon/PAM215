import { Text, StyleSheet, View, Button, TextInput, Alert } from "react-native"
import React,{useState} from 'react';

export default function TextInScreen() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [telefono, setTelefono] = useState('');

    const mostrarAlerta = () => {
        if(nombre.trim() === '' || password.trim() === '' || telefono.trim() === '') {
            Alert.alert('Error, por favor completa todos los campos (movil)');
            alert('Error, por favor completa todos los campos (desktop)');
        }else {
            //alert de movil
            Alert.alert("Datos ingresados \n" + 
                `Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`
            );

            //alert de desktop
            alert("Datos ingresados \n" +
                `    Nombre: ${nombre}\n    Password: ${password}\n    Telefono: ${telefono}`
            );
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>TextInput y Alert</Text>
            <Text style={styles.etiquetas}> Nombre: </Text>
            <TextInput
            style={styles.input}
                placeholder="Escribe tu nombre :)"
                value={nombre}
                onChangeText={setNombre}
            />

            <Text style={styles.etiquetas}> Password: </Text>
            <TextInput
            style={styles.input}
                placeholder="Escribe tu password :)"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <Text style={styles.etiquetas}> Telefono: </Text>
            <TextInput
            style={styles.input}
                placeholder="Escribe tu telefono :)"
                keyboardType="phone-pad"
                value={telefono}
                onChangeText={setTelefono}
            />

            <Button
                color= '#976810ff'
                title="Mostrar Alerta"
                onPress={mostrarAlerta}

            />

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  //flexbox
        backgroundColor: '#f0beabff', //color de fondo
        alignItems: 'center',  //alineacion de intems start(izquierda), center, end(derecha) Eje x
        justifyContent: 'center', //Eje y
    },

    titulo:{
        fontFamily:"Times New Roman", 
        fontSize:30,
        color:"#8e3e05ff",
        fontWeight:"bold",
        textDecorationLine:"underline",
        marginBottom:20,

    },

    etiquetas:{
        fontWeight:"bold",
        fontSize:16,
        marginBottom:5,
        marginTop:10,
        color:"#5b1a00ff",
    },

    input:{
        width:'50%', //ocupa el ancho disponible
        borderWidth:2, //grosor del borde
        borderColor:"#960c0cff", //color del borde
        borderRadius:5, //para las esquinas redondeadas
        padding:5, //espacio interno
        marginBottom:15, //espacio entre cajas
        backgroundColor:"#f0edc6ff", //color de fondo
    },

})