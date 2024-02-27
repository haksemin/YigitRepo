import { Text, View, Dimensions, ScrollView, Pressable } from "react-native";
import MiniCard from '../Cards/MiniCard';
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;





export default function UrunlerSection() {


    
function navigateToProductsScreen(){
    navigation.navigate("UrunGoster");
}
    const navigation = useNavigation();
    return (
        <>
        <View style={{ paddingTop: 10,flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{ fontFamily: "Inter-Bold", fontSize: 20, margin: 15 }}>Ürünlerimiz</Text>
            <View style={{paddingTop:23,marginRight:15}}>
                <Pressable onPress={navigateToProductsScreen}>
                <Text style={{color:"#FBBC0F"}}>Tümünü Gör</Text>
                </Pressable>
            </View>
        </View>
        <View>
             <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={{ height: windowHeight * 0.12, width: windowWidth}}
            >
                {Array.from({ length: 10 }, (_, index) => (
                    <MiniCard key={index} />
                ))}
            </ScrollView>
        </View>
        </>
    );
}
