import React from "react";
import { View,Dimensions,Text,StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function ListeCard(){

    return(
        <View style={style.container}>
            <View style={{flex:0.4,backgroundColor:"red"}}>
                <Text style={{fontFamily: "Inter-Medium", fontSize: 13, marginHorizontal:15,color:"white" }}>Urun Adı ve Modeli</Text>
            </View>

        </View>
    )
}





const style = StyleSheet.create({
    
    container:{ 
        width:windowWidth,
        height:windowHeight*0.06,
        backgroundColor:"black",
        justifyContent:"center",
        
        


}})