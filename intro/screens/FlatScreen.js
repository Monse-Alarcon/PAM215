import { Text, StyleSheet, View, FlatList, SectionList, ScrollView } from "react-native"
import React, {Component} from "react"

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
            datos: [
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
            datos: [
                {nombre: 'zanahoria'},
                {nombre: 'lechuga'},
                {nombre: 'tomate'},
                {nombre: 'brocoli'},
            ]
        }

    ]


    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.titulo}>Ejemplo de FlatList</Text>
                <FlatList>
                    
                </FlatList>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})