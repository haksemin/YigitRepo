import React from "react";
import { View,Dimensions,Text } from "react-native";
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
                <ListeCard></ListeCard>
            </View>
        </View>
    )
}