import React from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import StatusBar from "../components/Sections/StatusBar";
import Header from "../components/Sections/Header";


export default function CampaignScreen(){

    return(

        <View style={styles.container}>
          <StatusBar />
          <Header />
          <ScrollView>
          
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