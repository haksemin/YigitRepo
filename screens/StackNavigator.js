import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import UrunGoster from './UrunGoster';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import MainScreen from './MainScreen';



export default function StackNavigatorScreen(){

    return(
        <Stack.Navigator>
            <Stack.Screen name='MainScreen' component={MainScreen} options={{ headerShown: false  , animationEnabled:false}}></Stack.Screen>
            <Stack.Screen name='UrunGoster' component={UrunGoster} options={{ headerShown: false  , animationEnabled:false}}></Stack.Screen>
        </Stack.Navigator>
    )
}