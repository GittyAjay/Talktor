import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import Header from '../header/header'

function AppointmentResponse() {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, WIDTH, FONT_LARGE, SMALL_BUTTON_HEIGHT, BUTTON_HEIGHT, SMALL_DOT_SIZE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const [date, setDate] = useState('03 Feb 2021');
    const [time, setTime] = useState('02:20 Pm');
    const [doctor, setDoctor] = useState('Dr. Ripa Diwedi');
    const [appointmentType, setAppointmentType] = useState('Online');
    const [houreLeft, setHoureLeft] = useState('5:30');
    const headerComponnets = () =>
        <View>
            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold' }}>Appointment</Text>
        </View>
    return (
        <>
            <Header template={headerComponnets} />
            <View style={[styles.container, { marginHorizontal: INLINE_GAP }]}>
                <View style={[styles.appointmentDetail, { height: 150, backgroundColor: Colors.WHITE, marginVertical: INLINE_GAP, borderRadius: BORDER_RADIUS, paddingHorizontal: INLINE_GAP }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: Colors.GREY.LIGHT }}>Date</Text>
                            <Text style={{}}>{date}</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: Colors.GREY.LIGHT }}>Time</Text>
                            <Text style={{}}>{time}</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: Colors.GREY.LIGHT }}>Doctor</Text>
                            <Text style={{}}>{doctor}</Text>
                        </View>
                    </View>
                    <View style={{ height: 0.5, backgroundColor: Colors.GREY.LIGHT, marginHorizontal: -INLINE_GAP }}>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: Colors.GREY.LIGHT }}>Appoitment type</Text>
                            <Text style={{}}>{appointmentType}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.appointmentDetail, { height: 120, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingHorizontal: INLINE_GAP, justifyContent: 'center', alignItems: 'center' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.fontStyle, { fontWeight: 'bold' }]}>You Have</Text>
                        <Text style={[styles.fontStyle, { fontWeight: 'bold', color: Colors.CYAN, paddingHorizontal: DEFAUTL_SPACE / 2 }]}>{houreLeft}</Text>
                        <Text style={[styles.fontStyle, { fontWeight: 'bold' }]}>Hours Left</Text>
                    </View>
                    <View style={{ width: 300, marginVertical: DEFAUTL_SPACE / 2 }}>
                        <Text>Your All Option Will be available at the time of Appointment</Text>
                    </View>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: Colors.HOME_BCK
    },
    appointmentDetail: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    fontStyle: {

    }
})
export default AppointmentResponse;


