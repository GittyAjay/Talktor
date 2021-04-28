import React, { useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Splash from '../pages/Splash';
import AuthDashboard from '../pages/Auth';
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

function HomeNav() {
    const { ICON_SIZE, FONT_SMALL, WIDTH } = Numericals();

    const Icons = [
        'home',
        'hearto',
        'search1',
        'user'
    ];
    const anim = useRef(new Animated.Value(0)).current;
    const [state, setState] = useState(false);
    const interpolatedBackRotate = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0],
    });

    Animated.timing(anim, {
        toValue: 30,
        easing: Easing.linear,
        duration: 1000,
        useNativeDriver: true
    }).start()

    const Tab = createBottomTabNavigator();

    const CustomTab = (props: any) => {
        const label = props.label;
        const icon = props.icon;
        const focused = props.accessibilityState.selected;

        return (
            <TouchableWithoutFeedback onPress={props.onPress} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? Colors.TIRTARY : Colors.WHITE, borderRadius: 150, marginVertical: 2, marginHorizontal: focused ? 10 : 0 }} >
                <AIcon name={icon} color={focused ? Colors.WHITE : Colors.TIRTARY} size={ICON_SIZE} style={{ paddingLeft: 40, paddingRight: 5 }} />
                {focused && <Text style={{ fontFamily: "Comfortaa-Bold", color: Colors.WHITE, paddingRight: 40 }} >{label}</Text>}
            </TouchableWithoutFeedback>
        );
    }
    return (
        <Tab.Navigator
            lazy={true}
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 55,
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
                    tabBarButton: (props) => <CustomTab label="WishList" icon={Icons[1]} {...props} />
                }}
            />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarButton: (props) => <CustomTab label="Search" icon={Icons[2]} {...props} />
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarButton: (props) => <CustomTab label="Profile" icon={Icons[3]} {...props} />
                }}
            />
        </Tab.Navigator>
    );
}
// headerMode='none'
const HomeNavigator = () => (
    <Navigator headerMode='none'>
        <Screen name='Splash' component={Splash} />
        <Screen name='Dashboard' component={Dashboard} />
        <Screen name='Auth' component={AuthDashboard} />
        <Screen name='Otp' component={Otp} />
        <Screen name='Home' component={HomeNav} />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);