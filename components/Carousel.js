import { View,StyleSheet,Pressable,Text,Image} from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function carouselClick(){

    console.log("helo")
 }
export default function Carousel() {

    return(
        <Pressable onPress={carouselClick}>
        <View style={styles.carousel}>
                <Image style={{height:"100%", width:"100%"}} source={require("../assets/trycarousel.jpg")}></Image>
        </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({

    carousel: {
        height: 250,
        width: windowWidth -15,
        backgroundColor: "red",
        borderRadius:15,
        overflow: "hidden"
    }
});