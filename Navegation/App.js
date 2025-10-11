// 1.imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// 2. main: Zona de componentes
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// 3. Estilos: Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
