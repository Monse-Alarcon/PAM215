import { Text, StyleSheet, View } from "react-native"
import React, { useState} from "react"
import ContadorScreen from "./ContadorScreen";
import BotonesScreen from "./BotonesScreen"
import TextInScreen from "./TextInScreen";
import ImageBaScreen from "./ImageBaScreen";
import ScrollScreen from "./ScrollScreen";
import ActScreen from "./ActScreen";
import FlatScreen from "./FlatScreen";
import ModalScreen from "./ModalScreen";
import ButtonScreen from "./BottonScreen";
import RepasoScreen from "./RepasoScreen";
import { Button } from "react-native-web";

export default function MenuScreen() {
    const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'textin':
            return <TextInScreen/>;
        case 'imageba':
            return <ImageBaScreen/>;
        case 'scroll':
            return <ScrollScreen/>;
        case 'act':
            return <ActScreen/>;
        case 'flat':
            return <FlatScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'button':
            return <ButtonScreen/>;
        case 'Repaso1':
            return <RepasoScreen/>;
        case 'menu':
            default:
                return (
                    <View style={styles.container}> 
                        <Text style={styles.texto2}>Menu de practicas</Text>

                        <View style={styles.contenerdorBotones}>
                        <Button color="#b2d0f7ff" onPress={()=>setScreen('contador')} title="Prac: Contador" />
                        <Button color="#7896c0ff" onPress={()=>setScreen('botones')} title="Prac: Botones" />
                        <Button color="#6589bbff" onPress={()=>setScreen('textin')} title="Prac: TextIn" />
                        <Button color="#648abfff" onPress={()=>setScreen('imageba')} title="Prac: ImageBa" />
                        <Button color="#4876b7ff" onPress={()=>setScreen('scroll')} title="Prac: Scroll" />
                        <Button color="#3f6fb2ff" onPress={()=>setScreen('act')} title="Prac: ActivityIndicator" />
                        <Button color="#2c68bdff" onPress={()=>setScreen('flat')} title="Prac: FlatList" />
                        <Button color="#185ab8ff" onPress={()=>setScreen('modal')} title="Prac: Modal" />
                        <Button color="#034fbaff" onPress={()=>setScreen('button')} title="Prac: Bottom" />
                        <Button color="#012c72ff" onPress={()=>setScreen('Repaso1')} title="Prac: Repaso1" />
                        </View>
                    </View>
                )       
                
    }
    
    
}

const styles = StyleSheet.create({
    contenerdorBotones:{
    marginTop:15,
    flexDirection:"column", //column, row, row-reverse, column-reverse
    gap:10, //espacio entre botones
  },

  container: {
    flex: 1,  //flexbox
    backgroundColor: '#b0e1eaff', //color de fondo
    alignItems: 'center',  //alineacion de intems start(izquierda), center, end(derecha) Eje x
    justifyContent: 'center', //Eje y
  },

  texto2:{
    fontFamily:"Courier", //podemos guardadr más funtes en assets
    fontSize:25,
    color:"#082e44ff",
    fontWeight:"800",
    textDecorationLine:"underline" //underline, line-through
  },

  
})