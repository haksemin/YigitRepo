import React from "react";
import { StyleSheet, View,Image,Text,Dimensions, Pressable } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from "@react-navigation/native";


export default function MPButton({ButtonBase,rotasyon}){

    function NavigateTo(){
        navigation.navigate(rotasyon);
    }

    const navigation = useNavigation();


    return(
        <Pressable onPress={NavigateTo}>
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
        width:windowWidth*0.4,
        height:windowHeight*0.052,
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