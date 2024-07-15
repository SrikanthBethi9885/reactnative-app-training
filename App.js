import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './chat-app/Home';
import Signup from './chat-app/Signup';
import Login from './chat-app/Login';
import Background from './chat-app/Background';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Background>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Background>
  );
}

export default App;