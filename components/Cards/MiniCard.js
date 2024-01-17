import { View,StyleSheet,Image,Text } from "react-native";



export default function MiniCard(){

    return(
        <View style={styles.card}>
            <Image source={require("../../assets/images/icon.png")} style={{height:"100%",width:"100%",borderRadius:15}} ></Image>
            <View>
                <Text style={styles.text}>Ürünler</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    card:{
        height: 70,
        width: 70,
        backgroundColor: "black",
        marginHorizontal:5,
        borderRadius:15,
        
        
    } ,
    text: {
        fontFamily:"Inter-Regular",
        fontSize:12,
        alignSelf:"center",
        paddingTop:5,
    }
})
