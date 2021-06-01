import { Colors } from '../constants/color'
import React, { useEffect, useRef, useState } from 'react';
import StatusBar from '../styles/statusBar'
import { Numericals } from '../constants/numerical';
import AIcon from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet, Pressable, Button, Animated, Keyboard, Alert } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import Slider from '../components/Slider';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import Spinner from 'react-native-loading-spinner-overlay';
export default function Dashboard(props: { navigation: { push: Function, navigate: Function } }) {

    const { LOGIN_VIEW_HEIGHT, COMMON_BUTTON_HEIGHT, ICON_SIZE, BUTTON_HEIGHT, DEFAUTL_SPACE, FONT_SMALL, FONT_LARGE, FONT_MID, HEIGHT, WIDTH, BORDER_RADIUS_CIRCULAR, INLINE_GAP, BORDER_RADIUS, BORDER_WIDTH } = Numericals();
    const animaValue = useRef(new Animated.Value(HEIGHT)).current;
    const [mobileNo, setMobileNo] = useState('');
    const [loginHeading, setloginHeading] = useState("Let's get started! Enter your mobile number");
    const [backIconStatus, setbackIconStatus] = useState(false);
    const [code, setCode] = useState('');
    const [spinner, setSpinner] = useState(false);
    const [confirm, setConfirm] = useState({});
    const [phonSubmit, setPhoneSubmit] = useState(false);

    //otp part
    const [isActive, setActive] = useState(false);

    const otp1 = useRef(null);
    const otp2 = useRef(null);
    const otp3 = useRef(null);
    const otp4 = useRef(null);
    const otp5 = useRef(null);
    const otp6 = useRef(null);

    function interpolateAnima() {
        setbackIconStatus(true);
        setloginHeading('Enter Your Mobile Number')
        Animated.spring(animaValue, {
            toValue: 0,
            useNativeDriver: true
        }).start();
    }

    async function signInWithPhoneNumber() {
        setSpinner(true);
        const confirmation = await auth().signInWithPhoneNumber('+91' + mobileNo)
        if (confirmation) {
            setConfirm(confirmation);
            setSpinner(false);
            setPhoneSubmit(true);
        }
        else {
            alert("Error sending message");
        }
    }

    async function confirmCode() {
        setSpinner(true);
        try {
            await confirm.confirm(code);
            setSpinner(false);
            props.navigation.push('Home');
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        Animated.spring(animaValue, {
            toValue: HEIGHT - LOGIN_VIEW_HEIGHT,
            useNativeDriver: true
        }).start();

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("user");
            }
            else {
                // reset state if you need to  
                console.log("reset user");

            }
        })
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

    return (
        <View style={styles.container}>
            <StatusBar color={Colors.PRIMARY} />
            <Spinner
                visible={spinner}
                textStyle={styles.spinnerTextStyle}
            />
            <Text style={{ margin: moderateScale(INLINE_GAP), fontSize: scale(FONT_LARGE), fontFamily: 'Museo700-Regular', color: Colors.WHITE }}>Talktor</Text>
            <View style={{ marginBottom: moderateScale(LOGIN_VIEW_HEIGHT - 50) }}>
                <Slider />
            </View>

            <Animated.View style={{ transform: [{ translateY: animaValue }], ...StyleSheet.absoluteFillObject, paddingHorizontal: moderateScale(DEFAUTL_SPACE), backgroundColor: Colors.WHITE }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', paddingVertical: moderateScale(DEFAUTL_SPACE / 2) }}>
                    {!phonSubmit && <View>
                        <TouchableOpacity style={{ paddingVertical: moderateScale(DEFAUTL_SPACE), justifyContent: 'flex-start', alignItems: 'flex-start' }} onPress={() => backAnim()}>
                            <AIcon name="arrowleft" size={backIconStatus ? ICON_SIZE : 0} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: scale(FONT_MID), fontFamily: 'Museo700-Regular' }}>{loginHeading}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: moderateScale(DEFAUTL_SPACE), borderColor: Colors.GREY.SIMPLE, borderStyle: 'solid', borderRadius: BORDER_RADIUS, borderWidth: BORDER_WIDTH, marginVertical: moderateScale(DEFAUTL_SPACE) }}>
                            <Text style={{ fontFamily: 'Museo700-Regular', fontSize: scale(FONT_MID) }} >+91</Text>
                            <AIcon name="down" size={ICON_SIZE} />
                            <TextInput placeholder="Mobile number"
                                style={{ fontFamily: 'Museo700-Regular', fontSize: scale(FONT_MID), flex: 1, color: Colors.BLACK }}
                                maxLength={10}
                                onPressIn={() => { interpolateAnima(); }}
                                keyboardType="phone-pad"
                                focusable={true}
                                placeholderTextColor={Colors.GREY.LIGHT}
                                onChangeText={user => { setMobileNo(user); }} />
                        </View>
                    </View>}
                    {
                        phonSubmit && <View style={[styles.container, { backgroundColor: Colors.WHITE }]}>
                            <Spinner
                                visible={spinner}
                                textStyle={styles.spinnerTextStyle}
                            />
                            <View style={{ paddingHorizontal: moderateScale(INLINE_GAP) }}>
                                <View style={[styles.closeButton]}>
                                    <TouchableOpacity onPress={() => { props.navigation.pop() }} style={{ marginBottom: moderateScale(DEFAUTL_SPACE) }}>
                                        <AIcon name="arrowleft" color={Colors.BLACK} size={moderateScale(moderateScale(ICON_SIZE))} />
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.heading]}>
                                    <Text style={[styles.subheading_txt, { fontSize: scale(FONT_LARGE) }]}>Confirm your number</Text>
                                </View>
                                <View style={[styles.heading, { marginVertical: moderateScale(moderateScale(DEFAUTL_SPACE / 2)) }]}>
                                    <Text style={[styles.subheading_txt, { fontSize: scale(FONT_SMALL), color: Colors.BLACK }]}>Enter the code we have sent by SMS to {mobileNo}:</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, width: scale(45), height: scale(45) }, styles.shape]}><TextInput ref={otp1} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} maxLength={1} onChange={() => setActive(true)} keyboardType="phone-pad" onChangeText={text => {
                                        if (text.length == 1) {
                                            setCode(text);
                                            otp2.current.focus();
                                        }
                                        if (text.length < 1) {
                                            setCode(txt => txt.replace(txt.charAt(0), ''));
                                            otp1.current.focus();
                                        }
                                    }} onBlur={() => setActive(false)} /></Pressable>
                                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, marginHorizontal: DEFAUTL_SPACE, justifyContent: 'center', width: scale(45), height: scale(45) }, , styles.shape]}><TextInput ref={otp2} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} keyboardType="phone-pad" maxLength={1} onChangeText={text => {
                                        if (text.length == 1) {
                                            setCode(txt => txt.concat(text));
                                            otp3.current.focus();
                                        }
                                        if (text.length < 1) {
                                            setCode(txt => txt.replace(txt.charAt(1), ''));
                                            otp2.current.focus();
                                        }
                                    }} /></Pressable>
                                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, width: scale(45), height: scale(45) }, styles.shape]}><TextInput ref={otp3} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} maxLength={1} keyboardType="phone-pad" onChangeText={text => {
                                        if (text.length == 1) {
                                            setCode(txt => txt.concat(text));
                                            otp4.current.focus();
                                        }
                                        if (text.length < 1) {
                                            setCode(txt => txt.replace(txt.charAt(2), ''));
                                            otp3.current.focus();
                                        }
                                    }} /></Pressable>
                                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, marginHorizontal: DEFAUTL_SPACE, justifyContent: 'center', width: scale(45), height: scale(45) }, , styles.shape]}><TextInput ref={otp4} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} keyboardType="phone-pad" maxLength={1} onChangeText={text => {
                                        if (text.length == 1) {
                                            otp5.current.focus();
                                            setCode(txt => txt.concat(text));
                                        }
                                        if (text.length < 1) {
                                            setCode(txt => txt.replace(txt.charAt(3), ''));
                                            otp4.current.focus();
                                        }
                                    }} /></Pressable>
                                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, justifyContent: 'center', width: scale(45), height: scale(45) }, , styles.shape]}><TextInput ref={otp5} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} maxLength={1} keyboardType="phone-pad" onChangeText={text => {
                                        if (text.length == 1) {
                                            otp6.current.focus();
                                            setCode(txt => txt.concat(text));
                                        }
                                        if (text.length < 1) {
                                            setCode(txt => txt.replace(txt.charAt(4), ''));
                                            otp5.current.focus();
                                        }
                                    }} /></Pressable>
                                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, marginHorizontal: DEFAUTL_SPACE, justifyContent: 'center', width: scale(45), height: scale(45) }, , styles.shape]}><TextInput ref={otp6} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} maxLength={1} keyboardType="phone-pad" onChangeText={text => {
                                        if (text.length == 1) {
                                            otp6.current.blur();
                                            setCode(txt => txt.concat(text));
                                        }
                                        if (text.length < 1) {
                                            setCode(txt => txt.replace(txt.charAt(5), ''));
                                            otp5.current.focus();
                                        }
                                    }} /></Pressable>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: moderateScale(moderateScale(DEFAUTL_SPACE / 2)) }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={[styles.subheading_txt, { fontSize: scale(FONT_SMALL), color: Colors.BLACK }]}>Haven't received a code?</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => console.log()}>
                                        <Text style={{ borderBottomColor: Colors.BLACK, borderStyle: 'solid', borderBottomWidth: 2, color: Colors.BLACK, fontSize: scale(FONT_SMALL), fontFamily: 'Museo700-Regular', marginLeft: DEFAUTL_SPACE / 2 }}>More Options</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }

                    <Pressable style={({ pressed }) => [{ paddingVertical: COMMON_BUTTON_HEIGHT, backgroundColor: Colors.PRIMARY, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', transform: [{ scale: pressed ? 0.95 : 1 }] }]} onPress={() => {
                        phonSubmit ? confirmCode() : signInWithPhoneNumber()
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
    spinnerTextStyle: {
        color: '#FFF'
    },
    closeButton: {
        alignSelf: 'flex-start',
    },
    heading: {
        alignSelf: 'flex-start',
    },
    heading_txt: {
        fontFamily: 'Museo700-Regular',
    },
    subheading_txt: {
        fontFamily: 'Museo700-Regular',
    },
    shape: {
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
    }
});



