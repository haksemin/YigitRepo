import { StatusBar,Platform,View,StyleSheet } from "react-native";


export default CustomStatusBar = ({ backgroundColor, barStyle }) => {
    return (
      <View style={[styles.statusBar, { backgroundColor }]}>
        <View style={[styles.ustBar, ]}></View>
        <StatusBar backgroundColor={"#FBBC0F"} barStyle={barStyle} />
      </View>
    );
  };


  const styles = StyleSheet.create({
    statusBar: {
      height: Platform.OS === 'ios' ? 40 : 0,
    },
    ustBar: {
      height: Platform.OS === 'ios' ? 40 : 0,
      backgroundColor:"#FBBC0F",
    }
  });