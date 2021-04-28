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
import { withTimingTransition } from 'react-native-redash'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
export default function Dashboard(props: { navigation: { pop: Function } }) {

    const { LOGIN_VIEW_HEIGHT, ICON_SIZE, BUTTON_HEIGHT, DEFAUTL_SPACE, FONT_SMALL, FONT_LARGE, FONT_MID, HEIGHT, WIDTH, BORDER_RADIUS_CIRCULAR, INLINE_GAP, BORDER_RADIUS, BORDER_WIDTH } = Numericals();
    const animaValue = useRef(new Animated.Value(HEIGHT)).current;
    const [loginUi, setloginUi] = useState(false);
    const [inputStatus, setInputStatus] = useState(false);
    const [userName, setUserName] = useState('');
    useEffect(() => {
        setloginUi(false);
        Animated.timing(animaValue, {
            toValue: HEIGHT - LOGIN_VIEW_HEIGHT,
            duration: 400,
            useNativeDriver: true
        }).start();
    }, [])
    function interpolateAnima() {
        setloginUi(prev => !prev);
        Animated.spring(animaValue, {
            toValue: 0,
            useNativeDriver: true
        }).start();
    }
    function back() {
        setloginUi(false);
        Keyboard.dismiss;
        Animated.timing(animaValue, {
            toValue: HEIGHT - LOGIN_VIEW_HEIGHT,
            duration: 400,
            useNativeDriver: true
        }).start();
    }

    return (
        <View style={styles.container}>
            <StatusBar color={Colors.PRIMARY} />
            <Animated.View>
                <Slider />
            </Animated.View>

            <Animated.View style={{ transform: [{ translateY: animaValue }], ...StyleSheet.absoluteFillObject, paddingHorizontal: DEFAUTL_SPACE, backgroundColor: Colors.WHITE }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', paddingVertical: 10 }}>
                    <View>
                        <TouchableOpacity style={{ paddingVertical: DEFAUTL_SPACE, justifyContent: 'flex-start', alignItems: 'flex-start' }} onPress={() => back()}>
                            <AIcon name="arrowleft" size={loginUi ? ICON_SIZE : 0} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: FONT_MID, fontFamily: 'Museo700-Regular', paddingVertical: DEFAUTL_SPACE }}>Let's get started! Enter your mobile number</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: DEFAUTL_SPACE, borderColor: userName.length < 10 && userName.length > 0 ? Colors.RED : Colors.GREY.SIMPLE, borderStyle: 'solid', borderRadius: BORDER_RADIUS, borderWidth: BORDER_WIDTH, marginVertical: DEFAUTL_SPACE }}>
                            <Text style={{ fontFamily: 'Museo700-Regular', fontSize: FONT_MID }} >+91</Text>
                            <AIcon name="down" size={ICON_SIZE} />
                            <TextInput placeholder="Mobile number"
                                style={{ fontFamily: 'Museo700-Regular', fontSize: FONT_MID, flex: 1 }}
                                maxLength={10}
                                onPressIn={() => { interpolateAnima(); }}
                                onChange={() => setInputStatus(true)}
                                keyboardType="phone-pad"
                                onChangeText={user => { setUserName(user); }} />
                        </View>
                    </View>
                    <Pressable style={({ pressed }) => [{ backgroundColor: inputStatus ? Colors.PRIMARY : Colors.GREY.LIGHT, justifyContent: 'center', alignItems: 'center', height: BUTTON_HEIGHT, flexDirection: 'row', transform: [{ scale: pressed ? 0.9 : 1 }] }]} focusable={true} >
                        <Text style={{ fontFamily: 'Museo700-Regular', fontSize: FONT_MID, color: Colors.WHITE }}>Submit</Text>
                    </Pressable>
                </View>
            </Animated.View>
        </View >
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', backgroundColor: Colors.PRIMARY
    },
});



