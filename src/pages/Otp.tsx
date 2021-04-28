import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import { Colors } from '../constants/color';
import { Numericals } from '../constants/numerical';
import StatusBarTemplate from '../styles/statusBar';
import AIcon from 'react-native-vector-icons/AntDesign';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { scale, moderateScale } from 'react-native-size-matters';

export default function Otp(props: { navigation: { pop: Function } }) {
    const { ICON_SIZE, DEFAUTL_SPACE, FONT_LARGE, FONT_SMALL, INLINE_GAP, BORDER_WIDTH } = Numericals();
    const mobile_no = '6392363003';
    const [isActive, setActive] = useState(false);
    return (
        <View style={[styles.container, { backgroundColor: Colors.WHITE, paddingHorizontal: moderateScale(INLINE_GAP) }]}>
            <StatusBarTemplate color={Colors.WHITE} />
            <View style={[styles.closeButton]}>
                <TouchableOpacity onPress={() => { props.navigation.pop() }}>
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
                <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, width: scale(60), height: scale(60) }, styles.shape]}><TextInput style={{ fontSize: scale(FONT_LARGE) }} maxLength={1} onChange={() => setActive(true)} onBlur={() => setActive(false)} /></Pressable>
                <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, marginHorizontal: DEFAUTL_SPACE, justifyContent: 'center', width: scale(60), height: scale(60) }, , styles.shape]}><TextInput style={{ fontSize: scale(FONT_LARGE) }} maxLength={1} /></Pressable>
                <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, width: scale(60), height: scale(60) }, styles.shape]}><TextInput style={{ fontSize: scale(FONT_LARGE) }} maxLength={1} /></Pressable>
                <Pressable style={({ pressed }) => [{ borderRadius: moderateScale(DEFAUTL_SPACE), borderColor: isActive ? Colors.BLACK : Colors.GREY.SIMPLE, borderWidth: BORDER_WIDTH, marginHorizontal: DEFAUTL_SPACE, justifyContent: 'center', width: scale(60), height: scale(60) }, , styles.shape]}><TextInput style={{ fontSize: scale(FONT_LARGE) }} maxLength={1} /></Pressable>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: moderateScale(moderateScale(DEFAUTL_SPACE / 2)) }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.subheading_txt, { fontSize: scale(FONT_SMALL), color: Colors.BLACK }]}>Haven't received a code?</Text>
                </View>
                <TouchableOpacity onPress={() => console.log()}>
                    <Text style={{ borderBottomColor: Colors.BLACK, borderStyle: 'solid', borderBottomWidth: 2, color: Colors.BLACK, fontSize: scale(FONT_SMALL), fontFamily: 'Comfortaa-Bold', marginLeft: DEFAUTL_SPACE / 2 }}>More Options</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    closeButton: {
        alignSelf: 'flex-start',
    },
    heading: {
        alignSelf: 'flex-start',
    },
    heading_txt: {
        fontFamily: 'Comfortaa-Bold',
    },
    subheading_txt: {
        fontFamily: 'Comfortaa-Bold',
    },
    shape: {
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
    }

})



