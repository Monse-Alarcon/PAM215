import { Text, StyleSheet, View, ScrollView, Button } from 'react-native';
// Importamos React y hooks. useRef para referenciar el ScrollView, useState para guardar estado.
import React, { useRef, useState } from 'react';

export default function ScrollScreen() {
  // useRef crea una referencia mutable que persiste entre renders.
  // La usaremos para acceder a métodos imperativos del ScrollView (ej. scrollToEnd).
  const scrollRef = useRef();

  // useState crea una variable de estado (scrollY) y la función para actualizarla (setScrollY).
  // Inicialmente 0 — representa la posición vertical en píxeles.
  const [scrollY, setScrollY] = useState(0);

  // Función que desplaza el ScrollView hasta el final.
  // scrollRef.current referencia la instancia del ScrollView una vez montado.
  const irAlFinal = () => {
    scrollRef.current.scrollToEnd({ animated: true });
  };

  // Manejador del evento onScroll. Recibe el objeto event del ScrollView.
  // Extraemos event.nativeEvent.contentOffset.y que es la posición vertical (en px).
  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    // Guardamos la posición en el estado (provoca re-render con el nuevo valor).
    setScrollY(yOffset);
    // También lo imprimimos en la consola para depuración.
    console.log('Scroll vertical:', yOffset);
  };

  return (
    // ScrollView principal (vertical)
    <ScrollView
      ref={scrollRef} // asigna la referencia creada por useRef al ScrollView
      style={styles.container} // estilo del propio ScrollView (fondo, etc.)
      contentContainerStyle={styles.content} // estilo del contenedor interno (padding)
      showsVerticalScrollIndicator={true} // muestra la barra de scroll vertical nativa
      onScroll={handleScroll} // conecta el evento de scroll al manejador
      scrollEventThrottle={16} // frecuencia (ms) con la que se llaman los eventos onScroll
    >
      {/* Títulos */}
      <Text style={styles.Titulo}>Práctica: ScrollView</Text>
      <Text style={styles.Titulo2}>Ejemplo de desplazamiento vertical</Text>

      {/* Bloques verticales (cada uno es una View con estilo) */}
      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 1</Text>
      </View>

      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 2</Text>
      </View>

      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 3</Text>
      </View>

      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 4</Text>
      </View>

      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 5</Text>
      </View>



      {/* Botón que usa la función irAlFinal para desplazar al final */}
      <View style={{ marginVertical: 10 }}>
        <Button color= '#a9a2e4ff' title="Ir al final del scroll" onPress={irAlFinal} />
      </View>



      {/* Sección horizontal: ScrollView anidado con orientación horizontal */}
      <Text style={styles.Titulo2}>Ejemplo de desplazamiento horizontal</Text>

      <ScrollView
        horizontal // hace este ScrollView horizontal
        nestedScrollEnabled={true} // permite mejor manejo de gestos cuando está anidado
        style={styles.scrollhorizontal}
        showsHorizontalScrollIndicator={true}
      >
        {/* Múltiples cuadros horizontales */}
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 1</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 2</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 3</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 4</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 5</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 6</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 7</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 8</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 9</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 10</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 11</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 12</Text>
        </View>
      </ScrollView>

      {/* Párrafo largo dentro de un contenedor con fondo y padding */}
      <Text style={styles.Titulo2}>Texto de ejemplo</Text> 
      <View style={styles.parrafoContainer}>
        <Text style={styles.parrafo}>
          Los marcianos llegaron ya{'\n'}
          Y llegaron bailando el chachachá{'\n'}
          Ricachá, ricachá, ricachá{'\n'}
          Así llaman en Marte al chachachá{'\n'}
          Los marcianos llegaron ya{'\n'}
          Y llegaron bailando ricachá{'\n'}
          Ricachá, ricachá, ricachá{'\n'}
          Así llaman en Marte al chachachá
        </Text>
      </View>

      {/* Texto que muestra en pantalla la posición actual del scroll (redondeada) */}
      <Text style={styles.scrollInfo}>Posición vertical: {scrollY.toFixed(0)} px</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#f8f4c4' // color de fondo del ScrollView
  },
  content: { 
    padding: 20, // padding interior
    paddingBottom: 40 // padding inferior extra
  },
  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center'
  },
  Titulo2: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  elementos: {
    width: '100%',
    height: 100, // altura fija para cada bloque vertical
    backgroundColor: '#a5c3a7',
    justifyContent: 'center', // centra verticalmente el contenido
    alignItems: 'center', // centra horizontalmente el contenido
    marginVertical: 10,
    borderRadius: 10,
  },


  scrollhorizontal: {
     marginVertical: 10,
     width: '100%' 
  },


  
  elementos2: {
    width: 120,
    height: 120, // cuadro fijo para carrusel horizontal
    backgroundColor: '#608dabff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 10,
  },
  text: { 
    fontSize: 16,
    fontFamily: 'Courier',
    color: '#000000ff',
    fontWeight: '900',
    textDecorationLine: 'underline'
  },
  parrafoContainer: { 
    marginVertical: 10,
    backgroundColor: '#e6f0d4',
    padding: 15,
    borderRadius: 10
  },
  parrafo: { 
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#333',
    fontFamily: 'Courier'
  },
  scrollInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },
});