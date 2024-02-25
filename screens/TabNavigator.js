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
        screenOptions={{tabBarStyle: {height:windowHeight*0.10}}}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: false,
            style: { backgroundColor: '#FBBC0F', },
            
          }}>
            <Tab.Screen name="AnaSayfa" component={MainScreen}
            options={{
                tabBarInactiveBackgroundColor:"#FBBC0F",
                tabBarActiveBackgroundColor:"#FBBC0F",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                <Image
                    source={focused ? require('../assets/images/icons/Anasayfa4.png') : require('../assets/images/icons/Anasayfa3.png')}
                    style={{ width: 86*0.8, height: 57*0.8 }}
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
                    source={focused ? require('../assets/images/icons/Kampanyalar4.png') : require('../assets/images/icons/Kampanyalar3.png')}
                    style={{ width: 91*0.8, height: 57*0.8 }}
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
                    source={focused ? require('../assets/images/icons/sepetim4.png') : require('../assets/images/icons/sepetim3.png')}
                    style={{ width: 86*0.8, height: 57*0.8 }}
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
                    source={focused ? require('../assets/images/icons/Profil4.png') : require('../assets/images/icons/Profil3.png')}
                    style={{ width: 65*0.8, height: 57*0.8 }}
                />
                ),
            }}
            />
            
        </Tab.Navigator>
    )

}


export default TabNavigator;