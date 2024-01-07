import React from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';
import StatusBar from './components/StatusBar';
import Header from './Header';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
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
