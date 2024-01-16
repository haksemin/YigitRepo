import { View,StyleSheet,Pressable,Image} from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function carouselClick(){

    console.log("hello")
 }
export default function Carousel() {

    return(
        <Pressable onPress={carouselClick}>
        <View style={styles.carousel}>
                <Image style={{height:"100%", width:"100%"}} source={require("../../assets/images/trycarousel.jpg")}></Image>
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