import { Text,View,Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function UrunlerSection(){

    return(
        <View style={{paddingTop:10,margin:15}}>
            <Text style={{fontFamily:"Inter-Bold",fontSize:20}}> Ürünlerimiz</Text>
            <View>
            <View style={{height: windowHeight*0.12,backgroundColor:"red",width:windowWidth}}>

            </View>
            </View>
        </View>
        
    )
}