/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, { useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import MapScreen from './src/screens/MapScreen';
import Profile from './src/screens/Profile';
import Upload from './src/screens/Upload';

enableScreens();

function App() {

  useEffect(() => {

    if (Platform.OS !== 'web') {

      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

    }

  }, []);
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Map" component={MapScreen}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Upload" component={Upload}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;

