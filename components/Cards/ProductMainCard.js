import React from "react";
import { View,StyleSheet,Dimensions} from "react-native";



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function ProductMainCard(){

    return(
        <View style={styles.container}>
            
        </View>
    )
}





const styles = StyleSheet.create({

    container:{
        backgroundColor:"white",
        width: windowWidth * 0.4,
        height: windowHeight * 0.28,
        borderRadius:15,
        marginHorizontal:15,
        marginVertical:15

    },
    
    
})