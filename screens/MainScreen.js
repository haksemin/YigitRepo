import { View,StyleSheet } from "react-native";
import Carousel from "../components/Cards/Carousel";
import UrunlerSection from "../components/UrunlerSection";
import StatusBar from "../components/StatusBar"
import {Dimensions} from 'react-native';
import Header from "../components/Header";
import CarouselSection from "../components/CarouselSection";
import ButtonSection from "../components/ButtonSection";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MainScreen(){;

    return (
        <View style={styles.container}>
          <StatusBar />
          <Header />
          <View style={{ paddingTop: 15, alignItems: "center", }}>
            <CarouselSection></CarouselSection>
          </View>
          <View>
            <UrunlerSection>
            </UrunlerSection>
          </View>
          <View>
            <ButtonSection></ButtonSection>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#EDEDED",
    },
  });