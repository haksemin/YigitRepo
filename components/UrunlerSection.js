import { Text,View,Dimensions } from "react-native";
import MiniCard from '../components/Cards/MiniCard'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function UrunlerSection(){

    return(
        <View style={{paddingTop:10}}>
            <Text style={{fontFamily:"Inter-Bold",fontSize:20,margin:15}}> Ürünlerimiz</Text>
            <View>
            <View style={{height: windowHeight*0.12,backgroundColor:"red",width:windowWidth,justifyContent:"center"}}>
                <MiniCard></MiniCard>
            </View>
            </View>
        </View>
        
    )
}