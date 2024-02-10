import React from "react";
import { View,Dimensions } from "react-native";
import ProductMainCard from "../Cards/ProductMainCard";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductListSection(){

    return(
        <View style={{width:windowWidth,flexDirection:"coulmn",justifyContent:"center"}}>
            <View style={{width:windowWidth,flexDirection:"row",justifyContent:"center"}}>
                <ProductMainCard></ProductMainCard>
                <ProductMainCard></ProductMainCard>
            </View>
            <View style={{width:windowWidth,flexDirection:"row",justifyContent:"center"}}>
                <ProductMainCard></ProductMainCard>
                <ProductMainCard></ProductMainCard>
            </View>
            <View style={{width:windowWidth,flexDirection:"row",justifyContent:"center"}}>
                <ProductMainCard></ProductMainCard>
                <ProductMainCard></ProductMainCard>
            </View>
        </View>
    )
}