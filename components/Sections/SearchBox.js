import React from "react";
import { TextInput, View,Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function SearchBox({ onChangeText }) {
    return (
      <View style={{width: Dimensions.get('window').width * 0.9, alignSelf: "center", marginVertical: 15,flexDirection:"row"}}>
        
        <TextInput 
          placeholder=" 🔍 Ürün Ara 🎁"
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={onChangeText}
          style={{borderColor: "grey", borderWidth: 0.5, borderRadius:12, paddingVertical: 10, paddingHorizontal: 5,flex:1,backgroundColor:"white",shadowOpacity:5,shadowOffset:{width:15,height:5},elevation:5 }}>
            
          </TextInput>
      </View>
    );
  }