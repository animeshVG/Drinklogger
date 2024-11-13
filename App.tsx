import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import InputScreen from './screens/InputScreen';
import QRCodeScreen from './screens/QRCodeScreen';
import EnjoyScreen from './screens/EnjoyScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Input"
          component={InputScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QRCode"
          component={QRCodeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Enjoy"
          component={EnjoyScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
