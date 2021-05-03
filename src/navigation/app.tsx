import React, { useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Splash from '../pages/Splash';
import Otp from '../pages/Otp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import wishList from '../pages/Notifications';
import { Animated, Easing, View, Text } from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import F5Icon from 'react-native-vector-icons/FontAwesome5';
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import Doctor from '../pages/Doctors';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const { Navigator, Screen } = createStackNavigator();

function HomeNav() {
    const { ICON_SIZE, FONT_SMALL, WIDTH } = Numericals();

    const Icons = [
        'home',
        'stethoscope',
        'bullhorn',
        'th'
    ];

    const Tab = createBottomTabNavigator();

    const CustomTab = (props: any) => {
        const label = props.label;
        const icon = props.icon;
        const focused = props.accessibilityState.selected;

        return (
            <TouchableWithoutFeedback onPress={props.onPress} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? Colors.PRIMARY : Colors.WHITE, borderRadius: 150, marginVertical: 10, marginHorizontal: focused ? 10 : 0, paddingHorizontal: 20 }} >
                <F5Icon name={icon} color={focused ? Colors.WHITE : Colors.BLACK} size={ICON_SIZE} style={{ marginRight: 10 }} />
                {focused && <Text style={{ fontFamily: "Comfortaa-Bold", color: Colors.WHITE }} >{label}</Text>}
            </TouchableWithoutFeedback>
        );
    }
    return (
        <Tab.Navigator
            lazy={true}
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 70,
                },
            }}
        >
            <Tab.Screen name="Home" component={Home}

                options={{
                    tabBarButton: (props) => <CustomTab label="Home" icon={Icons[0]} {...props} />
                }}

            />
            <Tab.Screen name="WishList" component={wishList}
                options={{
                    tabBarButton: (props) => <CustomTab label="Doctors" icon={Icons[1]} {...props} />
                }}
            />
            <Tab.Screen name="Search" component={Doctor}
                options={{
                    tabBarButton: (props) => <CustomTab label="Notification" icon={Icons[2]} {...props} />
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarButton: (props) => <CustomTab label="Categories" icon={Icons[3]} {...props} />
                }}
            />
        </Tab.Navigator>
    );
}
// const ButtomNav = () => {
//     return (
//         <Drawer.Navigator initialRouteName="Home" >
//             <Drawer.Screen name="Home" component={Home} />
//             <Drawer.Screen name="Notifications" component={wishList} />
//         </Drawer.Navigator>
//     );
// }
// headerMode='none'
const HomeNavigator = () => (
    <Navigator headerMode='none'>
        <Screen name='Splash' component={Splash} />
        <Screen name='Dashboard' component={Dashboard} />
        <Screen name='Otp' component={Otp} />
        <Screen name='Home' component={HomeNav} />
        <Screen name='Search' component={Search} />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);