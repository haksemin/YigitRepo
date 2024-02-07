import React from "react";
import { View,Dimensions } from "react-native";
import ProductMainCard from "./Cards/ProductMainCard";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductListSection(){

    return(
        <View style={{backgroundColor:"red",width:windowWidth,height:windowHeight}}>
            <ProductMainCard></ProductMainCard>
        </View>
    )
}