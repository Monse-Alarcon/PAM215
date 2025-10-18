import { Text, StyleSheet, View, Button, Switch } from "react-native"
import React,{useState} from 'react';

export default function BotonesScreen() {
    const [esEncendido, cambiarEncendido] = useState(false);
    const [color, cambiarColor] = useState('#174166ff');

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Control de luz </Text>

            <text style={{color: esEncendido ? color: 'black'}}> 
                {esEncendido ? "Luz encendida" : "Luz apagada"}

            </text>

            <Switch
                value={esEncendido}
                onValueChange = { () => cambiarEncendido (!esEncendido)}
                trackColor={{true: '#f9f638ff', false: '#174166ff'}}
            ></Switch>

            <View style={styles.cajaBotones}>

                <Button
                    title='Amarillo'
                    onPress={() => esEncendido && cambiarColor('#f9f638ff')}
                    color="#a49408ff"
                ></Button>

                <Button
                    title='Verde'
                    onPress={() => esEncendido && cambiarColor('#3ee700ff')}
                    color="#4f9c4cff"
                ></Button>

                <Button
                    title='Azul'
                    onPress={() => esEncendido && cambiarColor('#00e5ffff')}
                    color="#355ea9ff"
                ></Button>
            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,  //flexbox
    backgroundColor: '#25454fff', //color de fondo
    alignItems: 'center',  //alineacion de intems start(izquierda), center, end(derecha) Eje x
    justifyContent: 'center', //Eje y
  },

  cajaBotones:{
    marginTop:15,
    flexDirection:"row", //column, row, row-reverse, column-reverse
    gap:10, //espacio entre botones
  },

  titulo:{
    fontSize:40,
    color:"#d8fffeff",
    fontWeight:"bold",
    marginBottom:20,
  },

  luz:{
    fontSize:30,
    marginBottom:20,
  },
})