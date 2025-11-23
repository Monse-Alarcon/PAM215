import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';
import Detalle from './screens/detalle';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ProfileMain" 
        component={Profile}
        options={{ title: 'Profile' }}
      />

      <Stack.Screen 
        name="Detalle" 
        component={Detalle}
        options={{
          title: 'Detalle',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}


function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName

          if (route.name === 'Home') iconName = 'home-outline'
          else if (route.name === 'Profile') iconName = 'person-outline'
          else if (route.name === 'Settings') iconName = 'settings-outline'

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 5, height: 60 },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
