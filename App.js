import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image,Dimensions } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './screens/TabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
     
      'Inter-Bold': require('./assets/fonts/Inter/Inter-SemiBold.ttf'), 
      'Inter-SemiBold': require('./assets/fonts/Inter/Inter-Bold.ttf'),
      'Inter': require('./assets/fonts/Inter/Inter.ttf'), 
      'Inter-Thin': require('./assets/fonts/Inter/Inter-Thin.ttf'), 
      'Inter-Regular': require('./assets/fonts/Inter/Inter-Regular.ttf'), 
      'Inter-Light': require('./assets/fonts/Inter/Inter-Light.ttf'), 
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainScreen' component={TabNavigator} options={{ headerShown: false  , animationEnabled:false}}></Stack.Screen>
      </Stack.Navigator>
      <View style={{position:"absolute", backgroundColor:"#FBBC0F",height:windowHeight*0.036,width:"100%",bottom:0}}></View>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};



export default App;
