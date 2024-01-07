import { StatusBar,Platform,View,StyleSheet } from "react-native";


export default CustomStatusBar = ({ backgroundColor, barStyle }) => {
    return (
      <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar backgroundColor={"#FBBC0F"} barStyle={barStyle} />
      </View>
    );
  };


  const styles = StyleSheet.create({
    statusBar: {
      height: Platform.OS === 'ios' ? 20 : 0, // Bu değeri ihtiyaca göre ayarlayabilirsin
    },
  });