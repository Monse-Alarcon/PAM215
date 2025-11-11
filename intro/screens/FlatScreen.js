import { Text, StyleSheet, View, FlatList, SectionList, ScrollView } from "react-native"
import React, {Component} from "react";

export default function FlatScreen() {
    const datos = [
        {id: '1', nombre: 'manzana'},
        {id: '2', nombre: 'platano'},
        {id: '3', nombre: 'naranja'},
        {id: '4', nombre: 'uva'},
        {id: '5', nombre: 'fresa'},
        {id: '6', nombre: 'sandia'},

    ]

    const secciones = [
        {
            titulo: 'Frutas',
            data: [
                {nombre: 'manzana'},
                {nombre: 'platano'},
                {nombre: 'naranja'},
                {nombre: 'uva'},
                {nombre: 'fresa'},
                {nombre: 'sandia'},
            ]
        },
        {
            titulo: 'Verduras',
            data: [
                {nombre: 'zanahoria'},
                {nombre: 'lechuga'},
                {nombre: 'tomate'},
                {nombre: 'brocoli'},
            ]
        },

    ]


    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.Titulo}>Ejemplo de FlatList</Text>
                
                <FlatList
                    data={datos}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View style={styles.elementos}>
                            <Text style={styles.text}>{item.nombre}</Text>
                        </View>
                        
                    )}

                    scrollEnabled={false}
                    ItemSeparatorComponent={() => <View style={styles.separador}/>}
                />  

                <Text style={styles.Titulo2}>Ejemplo de SectionList</Text>
                <SectionList
                    sections={secciones}
                    keyExtractor={(item, index) => item.nombre + index}
                    renderItem={({item}) => (
                        <View style={styles.itemSeccion}>
                            <Text style={styles.textItem}>
                                {item.nombre}
                            </Text>
                        </View> 
                    )}
                    renderSectionHeader={({section: {titulo}}) => (
                        <View style={styles.encabezado}>
                           <Text style={styles.tituloSeccion}>{titulo}</Text> 
                        </View>
                    )}
                    scrollEnabled={false}
                    stickySectionHeadersEnabled={false}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bce0caff',
    },

    content: {
        padding: 20,
        paddingBottom: 40,
    },

    Titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'center',
        color: '#063b21ff',
    },

    Titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'center',
        color: '#063b21ff',
    },

    elementos: {
        width: '100%',
        height: 50,
        backgroundColor: '#e4f1eaff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { 
            width: 0, 
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    text: {
        fontSize: 20,
        fontFamily: 'Times New Roman',
        color: '#7cbd9dff',
        fontWeight: '900',
    },

    separador: {
        height: 10,
    },

    encabezado:{
        backgroundColor: '#0f9e75ff',
        padding: 15,
        borderRadius: 12,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { 
            width: 0, 
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    tituloSeccion:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#151616ff',
        textAlign: 'center',
        fontFamily: 'Times New Roman',
    },

    itemSeccion:{
        backgroundColor: '#d9f0beff',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        marginLeft:10,
        shadowColor: '#000',
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowOpacity:0.2,
        shadowRadius: 2,
        elevation: 3,

    },

    textItem:{
        fontSize: 18,
        fontWeight: '700',
        color: '#40631aff',
        fontFamily: 'Times New Roman',
    },

})