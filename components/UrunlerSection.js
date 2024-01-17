import { Text, View, Dimensions, ScrollView } from "react-native";
import MiniCard from '../components/Cards/MiniCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UrunlerSection() {
    return (
        <>
        <View style={{ paddingTop: 10,flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{ fontFamily: "Inter-Bold", fontSize: 20, margin: 15 }}>Ürünlerimiz</Text>
            <View style={{paddingTop:23,marginRight:15}}>
                <Text style={{color:"#FBBC0F"}}>Tümünü Gör</Text>
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
