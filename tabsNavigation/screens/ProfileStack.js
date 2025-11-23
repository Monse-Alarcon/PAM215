import { createStackNavigator } from '@react-navigation/stack';
import Profile from './screens/Profile';
import Detalle from './screens/Detalle';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Perfil" 
        component={Profile}
        options={{ title: 'Perfil de usuario' }}
      />

      <Stack.Screen 
        name="Detalle" 
        component={Detalle}
        options={{
          title: 'Detalles del usuario',
          headerBackTitleVisible: false, 
        }}
      />
    </Stack.Navigator>
  );
}
