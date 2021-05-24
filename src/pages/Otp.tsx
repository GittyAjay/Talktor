import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import { Colors } from '../constants/color';
import { Numericals } from '../constants/numerical';
import StatusBarTemplate from '../styles/statusBar';
import AIcon from 'react-native-vector-icons/AntDesign';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { scale, moderateScale } from 'react-native-size-matters';
import Spinner from 'react-native-loading-spinner-overlay';


export default function Otp(props: { navigation: { push: Function, pop: Function }, route: { params: { confirm: any } } }) {
    const { ICON_SIZE, BUTTON_HEIGHT, DEFAUTL_SPACE, FONT_MID, FONT_LARGE, BORDER_RADIUS, COMMON_BUTTON_HEIGHT, FONT_SMALL, INLINE_GAP, BORDER_WIDTH } = Numericals();
    const mobile_no = '6392363003';
    const [isActive, setActive] = useState(false);
    const [confirm, setConfirm] = useState(props.route.params.confirm);
    const [spinner, setSpinner] = useState(false);

    const [code, setCode] = useState('');
    const otp1 = useRef(null);
    const otp2 = useRef(null);
    const otp3 = useRef(null);
    const otp4 = useRef(null);
    const otp5 = useRef(null);
    const otp6 = useRef(null);
    // console.log("OTP PAGE", confirm);

    async function confirmCode() {
        setSpinner(true);
        console.log("code is", code);
        try {
            await confirm.confirm(code);
            setSpinner(false);
            props.navigation.push('Home');
        } catch (error) {
            console.log('Invalid code.', error);
        }
    }
    return (
        <View style={[styles.container, { backgroundColor: Colors.WHITE }]}>
            <StatusBarTemplate color={Colors.WHITE} />
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
                    <Text style={[styles.subheading_txt, { fontSize: scale(FONT_SMALL), color: Colors.BLACK }]}>Enter the code we have sent by SMS to {mobile_no}:</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, width: scale(45), height: scale(45) }, styles.shape]}><TextInput ref={otp1} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} maxLength={1} onChange={() => setActive(true)} keyboardType="phone-pad" onChangeText={text => {
                        if (text.length == 1) {
                            setCode(text);
                            otp2.current.focus();
                        }
                    }} onBlur={() => setActive(false)} /></Pressable>
                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, marginHorizontal: DEFAUTL_SPACE, justifyContent: 'center', width: scale(45), height: scale(45) }, , styles.shape]}><TextInput ref={otp2} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} keyboardType="phone-pad" maxLength={1} onChangeText={text => {
                        if (text.length == 1) {
                            setCode(txt => txt.concat(text));
                            otp3.current.focus();
                        }
                    }} /></Pressable>
                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, width: scale(45), height: scale(45) }, styles.shape]}><TextInput ref={otp3} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} maxLength={1} keyboardType="phone-pad" onChangeText={text => {
                        if (text.length == 1) {
                            setCode(txt => txt.concat(text));
                            otp4.current.focus();
                        }
                    }} /></Pressable>
                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, marginHorizontal: DEFAUTL_SPACE, justifyContent: 'center', width: scale(45), height: scale(45) }, , styles.shape]}><TextInput ref={otp4} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} keyboardType="phone-pad" maxLength={1} onChangeText={text => {
                        if (text.length == 1) {
                            otp5.current.focus();
                            setCode(txt => txt.concat(text));
                        }
                    }} /></Pressable>
                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, justifyContent: 'center', width: scale(45), height: scale(45) }, , styles.shape]}><TextInput ref={otp5} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} maxLength={1} keyboardType="phone-pad" onChangeText={text => {
                        if (text.length == 1) {
                            otp6.current.focus();
                            setCode(txt => txt.concat(text));
                        }
                    }} /></Pressable>
                    <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, marginHorizontal: DEFAUTL_SPACE, justifyContent: 'center', width: scale(45), height: scale(45) }, , styles.shape]}><TextInput ref={otp6} style={{ fontSize: scale(FONT_LARGE), color: Colors.BLACK }} maxLength={1} keyboardType="phone-pad" onChangeText={text => {
                        if (text.length == 1) {
                            otp6.current.blur();
                            setCode(txt => txt.concat(text));
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
            <View style={{ padding: moderateScale(DEFAUTL_SPACE / 2) }}>
                <Pressable style={({ pressed }) => [{ paddingVertical: COMMON_BUTTON_HEIGHT, backgroundColor: Colors.PRIMARY, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', transform: [{ scale: pressed ? 0.95 : 1 }] }]} onPress={() => { confirmCode(); }} >
                    <Text style={{ fontFamily: 'Museo700-Regular', fontSize: moderateScale(FONT_MID), color: Colors.WHITE }}>Submit</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
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
    },
    spinnerTextStyle: {
        color: '#FFF'
    },

})



