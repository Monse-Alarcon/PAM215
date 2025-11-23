import { Text, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Detalle({navigation}) {

    return (
      <View style={styles.container}>
            
        <Text style={styles.title}> Detalles usuario</Text>
        <Text style={styles.subtitle}>Usando Navegacion Stack</Text>
  
      </View>
    )
  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    iconRow:{
        flexDirection:'column',
        alignItems:'center',        
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginLeft:10,
        color:'#000',
    },
    
    subtitle: {
    fontSize: 18,
    marginTop: 5,
    color: 'blue'
  },
})