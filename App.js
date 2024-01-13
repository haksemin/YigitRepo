import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import StatusBar from './components/StatusBar';
import Carousel from './components/Carousel';
import Header from './components/Header';
import UrunlerSection from './components/UrunlerSection';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
     
      'Inter-Bold': require('./assets/fonts/Inter/Inter-Bold.ttf'), 
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
    <View style={styles.container}>
      <StatusBar />
      <Header></Header>
      <View style={{ paddingTop: 15, alignItems: "center", }}>
        <Carousel />
      </View>
      <View>
        <UrunlerSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
});

export default App;
