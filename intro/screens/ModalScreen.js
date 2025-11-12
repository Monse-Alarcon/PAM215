import React, { useState } from "react";
import { Text, StyleSheet, View, Modal, Pressable, TextInput } from "react-native"

export default function ModalScreen() {
    const [mostrar, setMostrar] = useState(null);
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Bienvenido </Text>

            <Pressable style={styles.boton} onPress={() => setMostrar('login')}>
                <Text style={styles.text}>Iniciar sesión</Text>
            </Pressable>

            <Pressable style={styles.boton} onPress={() => setMostrar('registro')}>
                <Text style={styles.text}>Registrarse</Text>
            </Pressable>

            <Pressable style={styles.boton} onPress={() => setMostrar('alerta')}>
                <Text style={styles.text}>Alerta</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={false}
                visible={mostrar === 'login'}
                onRequestClose={() => setMostrar(null)}
            >
                <View style={styles.container2}>
                    <Text style={styles.titulo}> Formulario de inicio de sesión </Text>
                    <TextInput placeholder="Ingrese su usuario" style={styles.input} />
                    <TextInput placeholder="Ingrese su contraseña" secureTextEntry={true} style={styles.input} />
                

                <Pressable style={styles.boton} onPress={() => setMostrar(null)}>
                    <Text style={styles.text}>Iniciar sesión</Text>
                </Pressable>

                </View>

            </Modal>

            <Modal
                animationType="slide"
                transparent={false}
                visible={mostrar === 'registro'}
                onRequestClose={() => setMostrar(null)}
            >
                <View style={styles.container2}>
                    <Text style={styles.titulo}> Formulario de registro </Text>
                    <TextInput placeholder="Ingrese su usuario" style={styles.input} />
                    <TextInput placeholder="Ingrese su email" keyboardType={'email-address'} style={styles.input} />
                    <TextInput placeholder="Ingrese su contraseña" secureTextEntry={true} style={styles.input} />
                

                <Pressable style={styles.boton} onPress={() => setMostrar(null)}>
                    <Text style={styles.text}>Registrarse</Text>
                </Pressable>

                </View>

            </Modal>

            <Modal
                animationType="fade"
                transparent={false}
                visible={mostrar === 'alerta'}
                onRequestClose={() => setMostrar(null)}
            >
                <View style={styles.container3}>
                    <View style={styles.containerAlerta}>
                        <Text style={styles.textAlerta}> Esto es una alerta </Text>
                        <View style={styles.containerBoton}>
                            <Pressable style={styles.boton1} onPress={() => setMostrar(null)}>
                            <Text style={styles.text}>Ok</Text>
                            </Pressable>

                            <Pressable style={styles.boton2} onPress={() => setMostrar(null)}>
                            <Text style={styles.text}>Cerrar</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d0e7ebff",
    },

    container2: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b5def0ff",
    },

    container3: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0000003c",
    },

    boton:{
        backgroundColor: "#96baebff",
        padding: 15,
        borderRadius: 20,
        marginBottom: 15,
        width: "70%",
        alignItems: "center",
    },

    text:{
        color: "#1c43baff",
        fontWeight: '500',
        fontSize: 18,
    },
    
    titulo:{
        fontSize: 25,
        marginBottom: 30,
        color: "#122768ff",
        fontWeight: "bold",
    },

    input:{
        width: "80%",
        borderColor: "#091437ff",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        backgroundColor: "#ddeab4ff",
    },

    containerAlerta:{
        width: 300,
        height: 200,
        backgroundColor: "#ccd9e8ff",
        justifyContent: "center",
        borderRadius: 20,
        alignItems: "center",
    },

    textAlerta:{
        fontSize: 20,
        color: "#06032936",
    },

    boton1:{
        backgroundColor: "#96baebff",
        padding: 15,
        borderRadius: 15,
        marginRight: 10,
        width: 100,
        alignItems: "center",
    },

    boton2:{
        backgroundColor: "#dfd740ff",
        padding: 15,
        borderRadius: 15,
        marginRight: 10,
        width: 100,
        alignItems: "center",
    },

    containerBoton:{
        flexDirection: "row",
        marginTop: 25,
        justifyContent: "space-between",
        width: "80%",
    }

})