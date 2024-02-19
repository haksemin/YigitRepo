import React from "react";
import { View, StyleSheet, Dimensions, Image,Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductMainCard({ProductPrice,ProductName}) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.75, backgroundColor: "white", width: "100%", height: "100%" }}>
                <Image source={require("../../assets/images/iphone.png")} style={styles.image} />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.1)']}
                    style={styles.gradient}
                />
            </View>
            <View style={styles.ProductInfo}>
                <View style={{flex:0.5}}>
                    <Text style={{fontSize:10,fontFamily:"Inter-SemiBold",fontWeight:600}}>{ProductName}</Text>
                </View>
                <View style={{flex:0.5}}>
                    <Text style={{fontSize:14,fontFamily:"Inter-Bold",fontWeight:800}}>{ProductPrice} ₺ </Text>
                </View>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: windowWidth * 0.4,
        height: windowHeight * 0.28,
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
        flex: 0.25,
        backgroundColor: "white",
        width: "100%",
        height: "100%", 
        paddingHorizontal:8,

    },
});
