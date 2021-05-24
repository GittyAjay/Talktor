import React, { useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Splash from '../pages/Splash';
import Otp from '../pages/Otp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Doctors from '../pages/Doctors';
import { Animated, Easing, View, Text, StyleSheet } from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import F5Icon from 'react-native-vector-icons/FontAwesome5';
import IIcon from 'react-native-vector-icons/Ionicons'
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import DoctorIntro from '../pages/DoctorIntro';
import Notifications from '../pages/Notifications'
import Category from '../pages/Categories'
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import SearchResult from '../pages/SearchResult';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppointmentReq from '../pages/AppointmentReq'
import AppointmentRes from '../pages/AppointmentRes'
import Payment from '../pages/Payment';
import { useNavigation } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { scale, moderateScale } from 'react-native-size-matters';
import auth from '@react-native-firebase/auth';
const Drawer = createDrawerNavigator();
console.log(useNavigation);

const { Navigator, Screen } = createStackNavigator();
var currentUser = auth().currentUser;
// console.log("current user", currentUser);

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
            <Tab.Screen name="Doctors" component={TopNav}
                options={{
                    tabBarButton: (props) => <CustomTab label="Doctors" icon={Icons[1]} {...props} />
                }}
            />
            <Tab.Screen name="Notifications" component={Notifications}
                options={{
                    tabBarButton: (props) => <CustomTab label="Notification" icon={Icons[2]} {...props} />
                }}
            />
            <Tab.Screen name="Category" component={Category}
                options={{
                    tabBarButton: (props) => <CustomTab label="Categories" icon={Icons[3]} {...props} />
                }}
            />
        </Tab.Navigator>
    );
}
function TopNav() {

    const { ICON_SIZE, FONT_SMALL, WIDTH, FONT_MID, DEFAUTL_SPACE, FONT_LARGE, INLINE_GAP } = Numericals();
    const navigation = useNavigation();
    const HeaderComponnets = () =>
        <View style={[styls.shadow, {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: INLINE_GAP,
            paddingVertical: INLINE_GAP,
            backgroundColor: Colors.WHITE
        }]}>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', backgroundColor: Colors.WHITE, alignItems: 'center' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[styls.fontstyle, { fontSize: FONT_LARGE }]}>Available</Text>
                    <Text style={[styls.fontstyle, { fontSize: FONT_LARGE, fontWeight: 'bold' }]}>Specialist</Text>
                </View>
                <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')
                    }>
                        <AIcon name="search1" size={ICON_SIZE} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <IIcon name="chatbubble-ellipses-outline" size={ICON_SIZE} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    const Tab = createMaterialTopTabNavigator();

    return (
        <>
            <HeaderComponnets />
            <Tab.Navigator
                lazy={false}
                tabBarOptions={{
                    showLabel: true,
                    labelStyle: {
                        fontSize: FONT_MID,
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                    },
                    scrollEnabled: true
                }}
            >
                <Tab.Screen name="Pediatrician" component={Doctors}

                />
                <Tab.Screen name="Neurosurgeon" component={Doctors}

                />
                <Tab.Screen name="Cardiologist" component={Doctors}

                />
                <Tab.Screen name="Physicologist" component={Doctors}

                />

            </Tab.Navigator>
        </>
    );
}

const HomeNavigator = () => (
    currentUser ?
        <Navigator headerMode='none'>
            <Screen name='Home' component={HomeNav} />
            <Screen name='Search' component={Search} />
            <Screen name='SearchResult' component={SearchResult} />
            <Screen name='DoctorIntro' component={DoctorIntro} />
            <Screen name='AppointmentReq' component={AppointmentReq} />
            <Screen name='Payment' component={Payment} />
            <Screen name='AppointmentRes' component={AppointmentRes} />
        </Navigator>
        : <Navigator headerMode='none'>
            <Screen name='Splash' component={Splash} />
            <Screen name='Dashboard' component={Dashboard} />
            <Screen name='Otp' component={Otp} />
            <Screen name='Home' component={HomeNav} />
            <Screen name='Search' component={Search} />
            <Screen name='SearchResult' component={SearchResult} />
            <Screen name='DoctorIntro' component={DoctorIntro} />
            <Screen name='AppointmentReq' component={AppointmentReq} />
            <Screen name='Payment' component={Payment} />
            <Screen name='AppointmentRes' component={AppointmentRes} />
        </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);

const styls = StyleSheet.create({
    shadow: {
        shadowColor: Colors.GREY.SIMPLE,
        shadowOpacity: 0.9,
        shadowRadius: 3.3,
        elevation: 1,
    },
    fontstyle: {

    }
})