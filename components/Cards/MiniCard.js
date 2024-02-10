import { View,StyleSheet,Image,Text, Pressable } from "react-native";

function urunCinsListele(){
    console.log("Seçilen Ürün Türüne Ait Ürünler Listelendi")
}

export default function MiniCard(){

    return(
        <Pressable onPress={urunCinsListele}>
        <View style={styles.card}>
            <Image source={require("../../assets/images/icon.png")} style={{height:"100%",width:"100%",borderRadius:15}} ></Image>
            <View>
                <Text style={styles.text}>Ürünler</Text>
            </View>
        </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    card:{
        height: 70,
        width: 70,
        backgroundColor: "white",
        marginHorizontal:7,
        borderRadius:15,
        
        
    } ,
    text: {
        fontFamily:"Inter-Regular",
        fontSize:12,
        alignSelf:"center",
        paddingTop:5,
    }
})
