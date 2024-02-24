import React from "react";
import { Text, View } from "react-native";
import MainScreen from './MainScreen';
import DailyListScreen from './DailyListScreen';
import AccountScreen from './AccountScreen';
import CampaignScreen from './CampaignScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SepetScreen from "./SepetScreen";

const Tab = createBottomTabNavigator();

const TabNavigator  = () => {

    return(
        <Tab.Navigator>
            <Tab.Screen name="AnaSayfa" component={MainScreen} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name="Kampanyalar" component={CampaignScreen} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name="Sepet" component={SepetScreen} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name="Hesap" component={AccountScreen} options={{headerShown:false}}></Tab.Screen>
        </Tab.Navigator>
    )

}


export default TabNavigator;