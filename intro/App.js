// 1.imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';

// 2. main: Zona de componentes
export default function App() {

  const[contador,setContador]=useState(0);

  return (
    //objeto style con la clase container
    <View style={styles.container}> 

      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenerdorBotones}>
      <Button color="#7c74beff" title='Incrementar' onPress={()=>setContador(contador+1)}></Button>
      <Button color="#8cd3edff" title='Quitar' onPress={()=>setContador(contador-1)}></Button>
      <Button color="#e69fdbff" title='Reiniciar' onPress={()=>setContador(contador*0)}></Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// 3. Estilos: Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,  //flexbox
    backgroundColor: '#e6dfe4ff', //color de fondo
    alignItems: 'center',  //alineacion de intems start(izquierda), center, end(derecha) Eje x
    justifyContent: 'center', //Eje y
  },
  texto:{
    fontFamily:"Times New Roman", //podemos guardadr más funtes en assets
    fontSize:30,
    color:"#850370ff",
    fontWeight:"bold",
    fontStyle:"italic",
    textDecorationLine:"line-through" //underline, line-through
  },

  texto2:{
    fontFamily:"Courier", //podemos guardadr más funtes en assets
    fontSize:40,
    color:"#5d0d90ff",
    fontWeight:"900",
    textDecorationLine:"underline" //underline, line-through
  },

  contenerdorBotones:{
    marginTop:15,
    flexDirection:"row", //column, row, row-reverse, column-reverse
    gap:10, //espacio entre botones
  },

});
