import React from "react";
import { View,Dimensions,Text,StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function ListeCard({ProductName,ProductPrice}){

    return(
        <View style={style.container}>
            <View style={{flex:0.4}}>
                <View style={{flexDirection:"row",flex:1.5}}>
                    <Text style={{fontFamily: "Inter-Medium", fontSize: 13, marginHorizontal:15,color:"black" }}>{ProductName}</Text>
                    <View style={{flex:1}}>
                        
                    </View>
                    <View style={{flex:1,alignItems:"flex-end"}}>
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