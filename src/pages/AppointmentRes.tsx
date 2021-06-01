import React, { Component, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import Header from '../header/header'
import moment from 'moment';

function AppointmentResponse(props: { navigation: any, route: any }) {

    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, WIDTH, FONT_LARGE, SMALL_BUTTON_HEIGHT, BUTTON_HEIGHT, SMALL_DOT_SIZE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const [time, setTime] = useState(`${props.route.params.payload.activeSlot}`);
    const [activHour, setActiveHoure] = useState(0);
    const [activeMinute, setActiveMinute] = useState(0);
    const [activeDay, setActiveDay] = useState(props.route.params.payload.activeDay);
    const [activeDate, setActiveDate] = useState(props.route.params.payload.activeDate);
    const [activeMonth, setActiveMonth] = useState(props.route.params.payload.activeMonth);
    const [activeYear, setActiveYear] = useState(props.route.params.payload.activeYear);
    const [doctor, setDoctor] = useState(props.route.params.payload.doctorName);
    const [appointmentType, setAppointmentType] = useState('Online');
    const [timeLeft, setTimeLeft] = useState("");
    const [newDate, setNewDate] = useState('');
    useEffect(() => {
        const convertTime12to24 = (time12h) => {
            const [time, modifier] = time12h.split(' ');

            let [hours, minutes] = time.split(':');

            if (hours === '12') {
                hours = '00';
            }

            if (modifier === 'PM') {
                hours = parseInt(hours, 10) + 12;
            }

            return `${hours}:${minutes}`;
        }
        const [houre, minute] = convertTime12to24(time).split(':');
        const slotDate = moment({
            "month": activeMonth,
            "year": activeYear,
            "day": activeDate,
            "hour": houre,
            "minute": minute
        });
        setNewDate(slotDate.format("dddd, MMMM Do YYYY").toString())
        setTimeLeft(slotDate.fromNow(true));
    }, [])

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
                            <Text style={{}}>{newDate}</Text>
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
                        <Text style={[styles.fontStyle, { fontWeight: 'bold', color: Colors.CYAN, paddingHorizontal: DEFAUTL_SPACE / 2 }]}>{timeLeft}</Text>
                        <Text style={[styles.fontStyle, { fontWeight: 'bold' }]}>Left</Text>
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


