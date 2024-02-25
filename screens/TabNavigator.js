import React from "react";
import { Text, View,Image,Dimensions } from "react-native";
import MainScreen from './MainScreen';
import DailyListScreen from './DailyListScreen';
import AccountScreen from './AccountScreen';
import CampaignScreen from './CampaignScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SepetScreen from "./SepetScreen";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

const TabNavigator  = () => {

    return(
        <Tab.Navigator 
        screenOptions={{tabBarStyle: {height:windowHeight*0.13}}}
        tabBarOptions={{
            showLabel: false,
            style: { tabBarActiveBackgroundColor:"#FBBC0F" },
            
          }}>
            <Tab.Screen name="AnaSayfa" component={MainScreen}
            options={{
                tabBarInactiveBackgroundColor:"#FBBC0F",
                tabBarActiveBackgroundColor:"#FBBC0F",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                <Image
                    source={focused ? require('../assets/images/ikon/Anasayfa1.png') : require('../assets/images/ikon/Anasayfa2.png')}
                    style={{ width: 86*1, height: 57*1 }}
                />
                ),
            }}
            />
            <Tab.Screen name="Kampanyalar" component={CampaignScreen}  
            options={{
                tabBarInactiveBackgroundColor:"#FBBC0F",
                tabBarActiveBackgroundColor:"#FBBC0F",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                <Image
                    source={focused ? require('../assets/images/ikon/Kampanyalar1.png') : require('../assets/images/ikon/Kampanyalar2.png')}
                    style={{ width: 91*1, height: 57*1 }}
                />
                ),
            }}
            />
            <Tab.Screen name="Sepet" component={SepetScreen} 
            options={{
                tabBarInactiveBackgroundColor:"#FBBC0F",
                tabBarActiveBackgroundColor:"#FBBC0F",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                <Image
                    source={focused ? require('../assets/images/ikon/Sepet1.png') : require('../assets/images/ikon/Sepet2.png')}
                    style={{ width: 86*1, height: 57*1 }}
                />
                ),
            }}
            />
            <Tab.Screen name="Hesap" component={AccountScreen} 
            options={{
                tabBarInactiveBackgroundColor:"#FBBC0F",
                tabBarActiveBackgroundColor:"#FBBC0F",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                <Image
                    source={focused ? require('../assets/images/ikon/Hesap1.png') : require('../assets/images/ikon/Hesap2.png')}
                    style={{ width: 65*1, height: 57*1}}
                />
                ),
            }}
            />
            
        </Tab.Navigator>
    )

}


export default TabNavigator;