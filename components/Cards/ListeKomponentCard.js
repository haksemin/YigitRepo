import React from "react";
import { View,Dimensions,Text,StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function ListeCard({ProductName,ProductPrice,ProductColor}){

    return(
        <View style={style.container}>
            <View style={{flex:0.5}}>
                <View style={{flexDirection:"row",flex:1}}>
                    <Text style={{fontFamily: "Inter-Medium", fontSize: 10, marginHorizontal:15,color:"black" }}>{ProductName}</Text>
                    <View style={{flex:1.2,flexDirection:"row",justifyContent:"flex-end"}}>
                        <View style={{width:15,height:15,backgroundColor:"red",borderRadius:15,marginHorizontal:1}}></View>
                        <View style={{width:15,height:15,backgroundColor:"black",borderRadius:15,marginHorizontal:1}}></View>
                        <View style={{width:15,height:15,backgroundColor:"blue",borderRadius:15,marginHorizontal:1}}></View>
                        
                    </View>
                    <View style={{width:120,alignItems:"flex-end"}}>
                    <Text style={{fontFamily: "Inter-Medium", fontSize: 13, marginHorizontal:15,color:"black" }}>{ProductPrice} ₺</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}





const style = StyleSheet.create({
    
    container:{ 
        width:windowWidth,
        height:windowHeight*0.06,
        backgroundColor:"white",
        justifyContent:"center",
        
        


}})