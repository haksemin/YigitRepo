import React from "react";
import { StyleSheet, View,Image,Text, Pressable } from "react-native";


function showList(){
    console.log("Seçilen alana ait liste gösteriliyor");
}

export default function MPButton({ ButtonBase }){

    return(
        <Pressable onPress={showList}>
        <View style={styles.buton}>
            
            <View style={styles.solbuton}>
                <Image source={require("../../assets/images/File_icon.png")}></Image>
            </View>
            <View style={{marginHorizontal:15}}>
                <Text style={{fontFamily:"Inter-SemiBold",fontWeight:600,color:"#3F3F3F"}}>{ButtonBase}</Text>
            </View>
            
        </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    buton: {
        backgroundColor:"white",
        width:160,
        height:40,
        borderRadius:12,
        overflow:"hidden",
        flexDirection:"row",
        alignItems:"center"

    },
    solbuton: {
        height:"100%",
        width:32,
        backgroundColor:"#FBBC0F",
        alignItems:"center",
        justifyContent:"center"
        
    }

})