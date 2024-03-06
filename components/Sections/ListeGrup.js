import React from "react";
import { View,Dimensions,Text, ScrollView } from "react-native";
import ListeCard from "../Cards/ListeKomponentCard";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ListeGrup(){


    return(
        <View style={{marginTop:30}}> 
            <View style={{backgroundColor:"#FBBC0F",width:windowWidth,height:60,justifyContent:"center"}}>
                <Text style={{fontFamily: "Inter-Bold", fontSize: 20, marginHorizontal:15,color:"black" }}>Apple</Text>
            </View>
            <View>
                
                <ListeCard ProductName={"Iphone 15 PRO MAX 256GB"} ProductPrice={"76.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 15 PRO MAX PLUS 256GB"} ProductPrice={"6.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 12 PRO  128GB"} ProductPrice={"763.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 15 PRO MAX 256GB"} ProductPrice={"726.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 15 PRO MAX 256GB"} ProductPrice={"76.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 15 PRO MAX PLUS 256GB"} ProductPrice={"6.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 12 PRO  128GB"} ProductPrice={"763.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 15 PRO MAX 256GB"} ProductPrice={"726.000"}></ListeCard>
                
                
            </View>
            <View style={{backgroundColor:"#FBBC0F",width:windowWidth,height:60,justifyContent:"center"}}>
                <Text style={{fontFamily: "Inter-Bold", fontSize: 20, marginHorizontal:15,color:"black" }}>Samsung</Text>
            </View>
            <View>
                
                <ListeCard ProductName={"Iphone 15 PRO MAX 256GB"} ProductPrice={"76.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 15 PRO MAX PLUS 256GB"} ProductPrice={"6.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 12 PRO  128GB"} ProductPrice={"763.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 15 PRO MAX 256GB"} ProductPrice={"726.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 15 PRO MAX 256GB"} ProductPrice={"76.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 15 PRO MAX PLUS 256GB"} ProductPrice={"6.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 12 PRO  128GB"} ProductPrice={"763.000"}></ListeCard>
                <ListeCard ProductName={"Iphone 15 PRO MAX 256GB"} ProductPrice={"726.000"}></ListeCard>
                
                
            </View>
        </View>
    )
}