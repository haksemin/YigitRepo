import React from 'react';
import { View, Dimensions, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');



export default function Header() {

  const navigation = useNavigation();
  
  function goBackFunction() {
    
    navigation.goBack();
 }
 
  
  return (
    <View style={styles.header}>
      {navigation.canGoBack() ? (
        <View style={{ position: 'absolute', left: 15 }}>
          <Pressable onPress={goBackFunction}>
            <Image source={require('../../assets/images/ikon/BackIcon.png')} style={{ height: height * 0.03, width: width * 0.05 }} />
          </Pressable>
        </View>
      ) : null}
      <Image source={require('../../assets/images/yigitlogo.png')} style={{ height: height * 0.086, resizeMode: 'contain' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FBBC0F',
    height: height * 0.086,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
  },
});
