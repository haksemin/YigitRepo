import React from "react";
import { View,Text } from "react-native";
import Header from "../components/Sections/Header";
import StatusBar from "../components/Sections/StatusBar";

import ListeGrup from "../components/Sections/ListeGrup";



export default function DailyScreen(){

    return(

        <View>
            <StatusBar></StatusBar>
            <Header></Header>
            <View>
                <ListeGrup></ListeGrup>
            </View>
        </View>
    )
}