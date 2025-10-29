import { Text, StyleSheet, View, Button, ActivityIndicator } from "react-native"
import React, {useState} from "react";

export default function ActScreen() {
    const [loading, setLoading] = useState(false);
    const startLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000)
    };

    if (loading) {
        return (
        <View style={styles.container}>
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size="large"
                    color="#1d1d68ff"
                    animating={true}
                    hidesWhenStopped={true}
                />

                <Text style={styles.text} >Cargando...</Text>
            </View>
        </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style= {styles.title}> ActivityIndicator </Text>
            <Button title="Carga de datos" onPress={startLoading} />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bec0d9ff',
    },

    text:{
        color: '#5a4bcaff',
    },

    title:{
        fontSize: 20,
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#20067eff',
    },

    loadingContainer:{
        alignItems: 'center',
    },
})