import { useEffect, useState, useCallback, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,StyleSheet, Alert,ActivityIndicator,Platform, Modal } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';


export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [nombreEditando, setNombreEditando] = useState('');
  const [modalConfirmacionVisible, setModalConfirmacionVisible] = useState(false);
  const [usuarioAEliminar, setUsuarioAEliminar] = useState(null);
  const controller = useRef(new UsuarioController()).current;

  // SELECT - Cargar usuarios desde la BD
  const cargarUsuarios = useCallback(async () => {
      try {
          setLoading(true);

          const data = await controller.obtenerUsuarios();
          setUsuarios(data);

          console.log(`${data.length} usuarios cargados`);
      } catch (error) {
          Alert.alert('Error', error.message);
      } finally {
          setLoading(false);
      }
  }, []);

  // Inicializar y cargar datos
useEffect(() => {
    const init = async () => {
        await controller.initialize();
        await cargarUsuarios();
    };

    init();

    // avisar los cambios automáticos
    controller.addListener(cargarUsuarios);
     return () => {
        controller.removeListener(cargarUsuarios);
      };
    }, [cargarUsuarios]);


    //INSERT - Agregar nuevo usuario
    const handleAgregar= async ()=>{
      if(guardando)return;
      try{
        setGuardando(true);
        const usuarioCreado = await controller.crearUsuario(nombre);
        Alert.alert('Usuario Creado', `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
        setNombre('');
      }
      catch(error){
        Alert.alert('Error', error.message);
      }
      finally{
        setGuardando(false);
      }
    };

    // UPDATE - Abrir modal para editar usuario
    const handleEditarPress = (usuario) => {
      setUsuarioEditando(usuario);
      setNombreEditando(usuario.nombre);
      setModalVisible(true);
    };

    // UPDATE - Guardar cambios del usuario
    const handleGuardarEdicion = async () => {
      if (!nombreEditando.trim()) {
        Alert.alert('Error', 'El nombre no puede estar vacío');
        return;
      }

      try {
        setGuardando(true);
        const usuarioActualizado = await controller.actualizarUsuario(usuarioEditando.id, nombreEditando);
        Alert.alert('Éxito', `"${usuarioActualizado.nombre}" actualizado correctamente`);
        setModalVisible(false);
        setUsuarioEditando(null);
        setNombreEditando('');
      } catch (error) {
        Alert.alert('Error', error.message);
      } finally {
        setGuardando(false);
      }
    };

    // DELETE - Eliminar usuario
    const handleEliminar = (usuario) => {
      setUsuarioAEliminar(usuario);
      setModalConfirmacionVisible(true);
    };

    // DELETE - Confirmar eliminación
    const handleConfirmarEliminar = async () => {
      if (!usuarioAEliminar) return;

      try {
        setGuardando(true);
        await controller.eliminarUsuario(usuarioAEliminar.id);
        Alert.alert('Éxito', `"${usuarioAEliminar.nombre}" eliminado correctamente`);
        setModalConfirmacionVisible(false);
        setUsuarioAEliminar(null);
      } catch (error) {
        Alert.alert('Error', error.message);
      } finally {
        setGuardando(false);
      }
    };

    // DELETE - Cancelar eliminación
    const handleCancelarEliminar = () => {
      setModalConfirmacionVisible(false);
      setUsuarioAEliminar(null);
    };

    // Renderizar cada usuario
    const renderUsuario = ({ item, index }) => (
        <View style={styles.userItem}>

            <View style={styles.userNumber}>
                <Text style={styles.userNumberText}>{index + 1}</Text>
            </View>

            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.nombre}</Text>

                <Text style={styles.userId}>ID: {item.id}</Text>

                <Text style={styles.userDate}>
                    {new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}
                </Text>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.actionBtn, styles.editBtn]}
                onPress={() => handleEditarPress(item)}
                disabled={guardando}
              >
                <Text style={styles.actionBtnText}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionBtn, styles.deleteBtn]}
                onPress={() => handleEliminar(item)}
                disabled={guardando}
              >
                <Text style={styles.actionBtnText}>Eliminar</Text>
              </TouchableOpacity>
            </View>

        </View>
    );


  return (
    
    <View style={styles.container}>

      {/* Modal para editar usuario */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Usuario</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Nombre del usuario"
              value={nombreEditando}
              onChangeText={setNombreEditando}
              editable={!guardando}
            />

            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={[styles.modalBtn, styles.modalCancelBtn]}
                onPress={() => setModalVisible(false)}
                disabled={guardando}
              >
                <Text style={styles.modalBtnText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalBtn, styles.modalSaveBtn, guardando && styles.buttonDisabled]}
                onPress={handleGuardarEdicion}
                disabled={guardando}
              >
                <Text style={styles.modalBtnText}>
                  {guardando ? 'Guardando...' : 'Guardar'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal para confirmar eliminación */}
      <Modal
        visible={modalConfirmacionVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancelarEliminar}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirmar Eliminación</Text>
            
            <Text style={styles.modalMessage}>
              {usuarioAEliminar && `¿Estás seguro de que deseas eliminar a "${usuarioAEliminar.nombre}"? Esta acción no se puede deshacer.`}
            </Text>

            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={[styles.modalBtn, styles.modalCancelBtn]}
                onPress={handleCancelarEliminar}
                disabled={guardando}
              >
                <Text style={styles.modalBtnText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalBtn, styles.modalDeleteBtn, guardando && styles.buttonDisabled]}
                onPress={handleConfirmarEliminar}
                disabled={guardando}
              >
                <Text style={styles.modalBtnText}>
                  {guardando ? 'Eliminando...' : 'Eliminar'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Zona del encabezado */}

      <Text style={styles.title}> CRUD Usuario</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === 'web' ? ' WEB (LocalStorage)' : ` ${Platform.OS.toUpperCase()} (SQLite)`}
      </Text>

      {/* Zona del INSERT */}

      <View style={styles.insertSection}>
        <Text style={styles.sectionTitle}> Insertar Usuario</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!guardando}
        />

        <TouchableOpacity 
          style={[styles.button, guardando && styles.buttonDisabled]} 
          onPress={handleAgregar}
          disabled={guardando} >

          <Text style={styles.buttonText}>
            {guardando ? ' Guardando...' : 'Agregar Usuario'}
          </Text>

        </TouchableOpacity>

      </View>



      {/* Zona del SELECT */}

      <View style={styles.selectSection}>

        <View style={styles.selectHeader}>

          <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

          <TouchableOpacity 
            style={styles.refreshButton}
            onPress={cargarUsuarios} >
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>

        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
           ) : (
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUsuario}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}> No hay usuarios</Text>
                <Text style={styles.emptySubtext}>Agrega el primero arriba</Text>
              </View>
            }
            contentContainerStyle={usuarios.length === 0 && styles.emptyList}
          />
        )}

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectSection: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  selectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    color: '#007AFF',
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  userItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    alignItems: 'center',
  },
  userNumber: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userId: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 2,
  },
  userDate: {
    fontSize: 12,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 70,
  },
  editBtn: {
    backgroundColor: '#FFA500',
  },
  deleteBtn: {
    backgroundColor: '#FF3B30',
  },
  actionBtnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  modalBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalCancelBtn: {
    backgroundColor: '#e0e0e0',
  },
  modalSaveBtn: {
    backgroundColor: '#007AFF',
  },
  modalBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  modalMessage: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 22,
  },
  modalDeleteBtn: {
    backgroundColor: '#FF3B30',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
  },
  mvcInfo: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  mvcTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
  },
  mvcText: {
    fontSize: 12,
    color: '#555',
    lineHeight: 18,
  },
  bold: {
    fontWeight: 'bold',
    color: '#1976D2',
  },
});