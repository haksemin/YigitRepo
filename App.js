import React from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';
import StatusBar from './components/StatusBar';
import Header from './Header';
import Carousel from './components/Carousel';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <View style={{paddingTop:15, alignItems:"center",}}>
        <Carousel></Carousel>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#EDEDED",
  },
 
});

export default App;
