import { Colors } from '../constants/color'
import React, { useEffect, useRef, useState } from 'react';
import StatusBar from '../styles/statusBar'
import LottieView from 'lottie-react-native'
import { Numericals } from '../constants/numerical';
import AIcon from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet, Pressable, Button, Animated, Keyboard } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import Slider from '../components/Slider';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { createKeyboardAwareNavigator } from 'react-navigation';
import { onChange } from 'react-native-reanimated';
export default function Dashboard(props: { navigation: { push: Function, navigate: Function } }) {

    const { LOGIN_VIEW_HEIGHT, ICON_SIZE, BUTTON_HEIGHT, DEFAUTL_SPACE, FONT_SMALL, FONT_LARGE, FONT_MID, HEIGHT, WIDTH, BORDER_RADIUS_CIRCULAR, INLINE_GAP, BORDER_RADIUS, BORDER_WIDTH } = Numericals();
    const animaValue = useRef(new Animated.Value(HEIGHT)).current;
    const [mobileNo, setMobileNo] = useState('');
    const [loginHeading, setloginHeading] = useState("Let's get started! Enter your mobile number");
    const [backIconStatus, setbackIconStatus] = useState(false);

    function interpolateAnima() {
        setbackIconStatus(true);
        setloginHeading('Enter Your Mobile Number')
        Animated.spring(animaValue, {
            toValue: 0,
            useNativeDriver: true
        }).start();
    }

    useEffect(() => {
        Animated.spring(animaValue, {
            toValue: HEIGHT - LOGIN_VIEW_HEIGHT,
            useNativeDriver: true
        }).start();
    }, [0])

    function backAnim() {
        Keyboard.dismiss();
        setbackIconStatus(false);
        setloginHeading("Let's get started! Enter your mobile number")
        Animated.spring(animaValue, {
            toValue: HEIGHT - LOGIN_VIEW_HEIGHT,
            useNativeDriver: true
        }).start();
    }
    function submit() {
        console.log("submit button is clicked");

    }
    return (
        <View style={styles.container}>
            <StatusBar color={Colors.PRIMARY} />
            <Text style={{ margin: moderateScale(INLINE_GAP), fontSize: scale(FONT_LARGE), fontFamily: 'Museo700-Regular', color: Colors.WHITE }}>Talktor</Text>
            <View style={{ marginBottom: moderateScale(LOGIN_VIEW_HEIGHT - 50) }}>
                <Slider />
            </View>

            <Animated.View style={{ transform: [{ translateY: animaValue }], ...StyleSheet.absoluteFillObject, paddingHorizontal: moderateScale(DEFAUTL_SPACE / 2), backgroundColor: Colors.WHITE }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', paddingVertical: moderateScale(DEFAUTL_SPACE) }}>
                    <View>
                        <TouchableOpacity style={{ paddingVertical: moderateScale(DEFAUTL_SPACE), justifyContent: 'flex-start', alignItems: 'flex-start' }} onPress={() => backAnim()}>
                            <AIcon name="arrowleft" size={backIconStatus ? ICON_SIZE : 0} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: scale(FONT_MID), fontFamily: 'Museo700-Regular' }}>{loginHeading}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: moderateScale(DEFAUTL_SPACE), borderColor: Colors.GREY.SIMPLE, borderStyle: 'solid', borderRadius: BORDER_RADIUS, borderWidth: BORDER_WIDTH, marginVertical: moderateScale(DEFAUTL_SPACE) }}>
                            <Text style={{ fontFamily: 'Museo700-Regular', fontSize: scale(FONT_MID) }} >+91</Text>
                            <AIcon name="down" size={ICON_SIZE} />
                            <TextInput placeholder="Mobile number"
                                style={{ fontFamily: 'Museo700-Regular', fontSize: scale(FONT_MID), flex: 1 }}
                                maxLength={10}
                                onPressIn={() => { interpolateAnima(); }}
                                keyboardType="phone-pad"
                                focusable={true}
                                onChangeText={user => { setMobileNo(user); }} />
                        </View>
                    </View>
                    <Pressable style={[{ backgroundColor: Colors.PRIMARY, justifyContent: 'center', alignItems: 'center', height: BUTTON_HEIGHT, flexDirection: 'row' }]} onPress={() => {
                        props.navigation.push('Otp');
                    }}>
                        <Text style={{ fontFamily: 'Museo700-Regular', fontSize: moderateScale(FONT_MID), color: Colors.WHITE }}>Submit</Text>
                    </Pressable>
                </View>
            </Animated.View>
        </View >
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'stretch', justifyContent: 'space-between', flexDirection: 'column', backgroundColor: Colors.PRIMARY
    },
});



