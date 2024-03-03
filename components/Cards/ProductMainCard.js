import React from "react";
import { View, StyleSheet, Dimensions, Image,Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductMainCard({ProductPrice,ProductName,Product_Color}) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.75, backgroundColor: "white", width: "100%", height: "100%",flexDirection:"column" }}>
                
                <Image source={require("../../assets/images/iphone.png")} style={styles.image} />
                
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.1)']}
                    style={styles.gradient}
                />
                <View style={{flex:0.8,width:"100%",alignSelf:"center"}}></View>
                <View style={{flex:0.2,width:"100%",flexDirection:"row",alignSelf:"center",alignItems:"center",justifyContent:"flex-end"}}>
                    <View style={{width:15,height:15,backgroundColor:Product_Color,borderRadius:15,marginHorizontal:5}}></View>
                    
                </View>
            </View>
            <View style={styles.ProductInfo}>
                <View style={{flex:0.6}}>
                    <Text style={{fontSize:10,fontFamily:"Inter-SemiBold",fontWeight:600}}>{ProductName}</Text>
                </View>
                <View style={{flex:0.5}}>
                    <Text style={{fontSize:12,fontFamily:"Inter-Bold",fontWeight:800}}>{ProductPrice} ₺ </Text>
                </View>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: windowWidth * 0.4,
        height: windowHeight * 0.3,
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 15,
        flex: 1,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 4,

    },
    image: {
        width: "100%",
        height: "100%",
        position: 'absolute', 
    },
    gradient: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    ProductInfo:{
        flex: 0.3,
        backgroundColor: "white",
        width: "100%",
        height: "100%", 
        paddingHorizontal:8,

    },
});
