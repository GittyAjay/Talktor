import React, { useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Splash from '../pages/Splash';
import Otp from '../pages/Otp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import wishList from '../pages/wishList';
import { Animated, Easing, View, Text } from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
const { Navigator, Screen } = createStackNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const ButtomNav = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Notifications" component={wishList} />
        </Drawer.Navigator>
    );
}
// headerMode='none'
const HomeNavigator = () => (
    <Navigator headerMode='none'>
        <Screen name='Splash' component={Splash} />
        <Screen name='Dashboard' component={Dashboard} />
        <Screen name='Otp' component={Otp} />
        <Screen name='Home' component={ButtomNav} />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);