import React from "react";
import { View,Text,StyleSheet,ScrollView, Button,Dimensions } from "react-native";
import StatusBar from "../components/Sections/StatusBar";
import Header from "../components/Sections/Header";
import { useNavigation } from "@react-navigation/native";
import ProductMainCard from "../components/Cards/ProductMainCard";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function UrunGoster(){

    return(
        <View style={styles.container}>
          <StatusBar />
          <Header />
          <ScrollView>
          <View style={{width:windowWidth,flexDirection:"column",justifyContent:"center"}}>
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
          </ScrollView>
          
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#EDEDED",
    },
  });