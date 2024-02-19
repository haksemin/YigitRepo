import { View,Dimensions } from "react-native";
import MPButton from "../Buttons/MPButton";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function ButtonSection(){

    return(
        <View style={{flexDirection:"column",width:windowWidth,height:windowHeight*0.2}}>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginVertical:15}}>
            <MPButton ButtonBase="Sıfır Ürünler"></MPButton>
            <MPButton ButtonBase="2. El Liste"></MPButton>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
            <MPButton ButtonBase="Günlük Liste"></MPButton>
            <MPButton ButtonBase="Onarım Sorgu"></MPButton>
            </View>
            
        </View>
    )
}