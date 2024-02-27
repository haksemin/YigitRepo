import React from "react";
import { View,Text,StyleSheet,ScrollView, Button } from "react-native";
import StatusBar from "../components/Sections/StatusBar";
import Header from "../components/Sections/Header";
import { useNavigation } from "@react-navigation/native";





export default function UrunGoster(){



    function Deneme(){
        
        navigation.goBack()
        
    }
    const navigation = useNavigation();
    

    return(
        <View style={styles.container}>
          <StatusBar />
          <Header />
          <ScrollView>
            <Button title="Geri Dön" onPress={Deneme}></Button>
          
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