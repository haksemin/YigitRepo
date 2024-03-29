import React, { useState, useEffect } from 'react';
import { View,Dimensions } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigatorScreen from './screens/StackNavigator';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import TabNavigator from './screens/TabNavigator';
import { usePushNotifications } from './usePushNotifications';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const App = () => {

  const {expoPushToken, notification} = usePushNotifications();

  const data = JSON.stringify(notification, undefined, 2);

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
     
      'Inter-Bold': require('./assets/fonts/Inter/Inter-SemiBold.ttf'), 
      'Inter-SemiBold': require('./assets/fonts/Inter/Inter-Bold.ttf'),
      'Inter': require('./assets/fonts/Inter/Inter.ttf'), 
      'Inter-Thin': require('./assets/fonts/Inter/Inter-Thin.ttf'), 
      'Inter-Regular': require('./assets/fonts/Inter/Inter-Regular.ttf'), 
      'Inter-Light': require('./assets/fonts/Inter/Inter-Light.ttf'), 
      'Inter-Medium': require('./assets/fonts/Inter/Inter-Medium.ttf'), 
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
      <TabNavigator/>
      {Platform.OS === 'ios' && (
          <View style={{position: "absolute", backgroundColor: "#FBBC0F", height: windowHeight * 0.036, width: "100%", bottom: 0}}></View>
        )}
    </NavigationContainer>
    </SafeAreaProvider>
  );
};



export default App;
