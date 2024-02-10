import { View,Dimensions,Image,StyleSheet } from "react-native"


const { width, height} = Dimensions.get("window");

export default function Header(){
    return(
        <View style={styles.header}>
            <Image source={require("../../assets/images/yigitlogo.png")} style={{height: height* 0.086}}></Image>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
      backgroundColor: "#FBBC0F",
      height: height * 0.086,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });