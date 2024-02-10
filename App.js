import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import StatusBar from './components/Sections/StatusBar';
import Carousel from './components/Cards/Carousel';
import Header from './components/Sections/Header';
import UrunlerSection from './components/Sections/UrunlerSection';
import MainScreen from './screens/MainScreen';
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
    <MainScreen></MainScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
});

export default App;
