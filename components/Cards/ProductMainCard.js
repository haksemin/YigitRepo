import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductMainCard() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.75, backgroundColor: "white", width: "100%", height: "100%" }}>
                <Image source={require("../../assets/images/iphone.png")} style={styles.image} />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.1)']}
                    style={styles.gradient}
                />
            </View>
            <View style={{ flex: 0.25, backgroundColor: "white", width: "100%", height: "100%" }}></View>
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
    },
    image: {
        width: "100%",
        height: "100%",
        position: 'absolute', // Resmi ve gradyanı üst üste bindir
    },
    gradient: {
        flex: 1,
        position: 'absolute', // Gradyanı mutlak konumlandırma
        width: '100%',
        height: '100%',
    }
});
