import React from "react";
import { View,Dimensions } from "react-native";
import ProductMainCard from "../Cards/ProductMainCard";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductListSection(){

    return(
        <View style={{width:windowWidth,flexDirection:"coulmn",justifyContent:"center"}}>
            <View style={{width:windowWidth,flexDirection:"row",justifyContent:"center"}}>
                <ProductMainCard ProductPrice={"10.000"} ProductName={"Iphone 11 Pro 128GB Gece Mavisi"}></ProductMainCard>
                <ProductMainCard ProductPrice={"15.000"} ProductName={"Iphone 15 Pro 128GB Gece Mavisi"}></ProductMainCard>
            </View>
            <View style={{width:windowWidth,flexDirection:"row",justifyContent:"center"}}>
                <ProductMainCard ProductPrice={"14.000"} ProductName={"Iphone 12 Pro 128GB Gece Mavisi"}></ProductMainCard>
                <ProductMainCard ProductPrice={"12.000"} ProductName={"Iphone 15 Pro 128GB Gece Mavisi"}></ProductMainCard>
            </View>
            <View style={{width:windowWidth,flexDirection:"row",justifyContent:"center"}}>
                <ProductMainCard ProductPrice={"17.000"} ProductName={"Iphone 14 Pro 128GB Gece Mavisi"}></ProductMainCard>
                <ProductMainCard ProductPrice={"18.000"} ProductName={"Iphone 15 Pro 128GB Gece Mavisi"}></ProductMainCard>
            </View>
        </View>
    )
}