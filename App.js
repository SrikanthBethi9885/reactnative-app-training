import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ContactScreen from './components/ContactScreen';
import ChatScreen from './components/ChatScreen';
import MessageScreen from './components/MessageScreen';
const Stack = createNativeStackNavigator();

const App =()=> {
  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="ContactScreen" component={ContactScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

export default App;