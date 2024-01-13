import { View,StyleSheet } from "react-native";
import Carousel from "../Carousel";
import UrunlerSection from "../UrunlerSection";
import StatusBar from "../StatusBar"


export default function MainScreen(){;

    return (
        <View style={styles.container}>
          <StatusBar />
          <Header />
          <View style={{ paddingTop: 15, alignItems: "center", }}>
            <Carousel />
          </View>
          <View>
            <UrunlerSection />
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