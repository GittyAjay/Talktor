import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Header from '../header/header'
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import IIcon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import AIcon from 'react-native-vector-icons/AntDesign'
import StatusBar from '../styles/statusBar'
import { ScrollView } from 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux'
import moment from 'moment';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';


function Notification(props: { navigation: any, appointments: any }) {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, FONT_LARGE, SMALL_BUTTON_HEIGHT, BUTTON_HEIGHT, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const [appointment, setAppointment] = useState([]);
    const setUserDispatch = useDispatch();
    const clearDefault = useDispatch();

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
    useEffect(() => {
        props.navigation.addListener('focus', () => {
            const uid = auth().currentUser.uid;
            firestore()
                .collection('Users')
                .doc(uid)
                .collection('appointments')
                .onSnapshot(documentSnapshot => {
                    clearDefault({ type: 'CLEAR_DEFAULT' })
                    firestore()
                        .collection('Users')
                        .doc(uid)
                        .collection('appointments')
                        .get()
                        .then(documentSnapshot => {
                            documentSnapshot.docs.map((value, id) => {
                                setUserDispatch({ type: 'APPOINTMENTS_FETCH', payload: value })
                            })
                        }).then(res => {
                            setAppointment(props.appointments); console.log("updated")
                        })
                })
        });



    }, []);
    const HeaderComponnets = () =>
        <View style={[styls.shadow, {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.WHITE,
            paddingVertical: INLINE_GAP
        }]}>
            <Text style={[styls.fontstyle, { fontSize: FONT_LARGE, fontWeight: 'bold' }]}>Notifications</Text>
        </View>
    return (
        <>
            <StatusBar color={Colors.WHITE} />
            <HeaderComponnets />
            <ScrollView style={{ flex: 1 }}>
                <View style={[styls.container]}>
                    <View style={[styls.today, { marginTop: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, paddingHorizontal: INLINE_GAP, paddingVertical: DEFAUTL_SPACE }]}>
                        <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>Today</Text>
                        {props.appointments.map((value, id) => {
                            const [houre, minute] = convertTime12to24(value._data.activeSlot).split(':');
                            const appointDate = moment(new Date(value._data.activeYear, value._data.activeMonth, value._data.activeDate)).format('MMMM Do YYYY');
                            const appointTime = moment(new Date(value._data.activeYear, value._data.activeMonth, value._data.activeDate, houre, minute)).format('hh:mm a');
                            const todayDate = moment().format("MMMM Do YYYY");
                            return appointDate == todayDate ? (<View style={{ flexDirection: 'column' }} key={id}>
                                <View style={[styls.todayElements, { paddingVertical: DEFAUTL_SPACE }]}>
                                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingVertical: DEFAUTL_SPACE }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS, marginRight: DEFAUTL_SPACE }}>
                                                <IIcon name="md-notifications-outline" size={ICON_SIZE} style={{ transform: [{ rotateZ: '20deg' }] }} color={Colors.WHITE} />
                                            </View>
                                            <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>{"Remaind From " + "Dr. " + value._data.doctorName}</Text>
                                        </View>
                                        <Text>Be ready at {appointTime} for your  appointment</Text>
                                    </View>
                                </View>
                                <View style={{ height: 0.5, backgroundColor: Colors.GREY.LIGHT, marginHorizontal: -INLINE_GAP }}>
                                </View>
                            </View>) : null;
                        })}
                    </View>
                    <View style={[styls.today, { marginTop: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, paddingHorizontal: INLINE_GAP, paddingVertical: DEFAUTL_SPACE }]}>
                        <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>Yesterday</Text>
                        {props.appointments.map((value, id) => {
                            const [houre, minute] = convertTime12to24(value._data.activeSlot).split(':');
                            const appointDate = moment(new Date(value._data.activeYear, value._data.activeMonth, value._data.activeDate)).format('MMMM Do YYYY');
                            const appointTime = moment(new Date(value._data.activeYear, value._data.activeMonth, value._data.activeDate, houre, minute)).format('h:mm a');
                            const nextDate = moment(new Date()).add(1, "days").format('MMMM Do YYYY');
                            return appointDate == nextDate ? (<View style={{ flexDirection: 'column' }} key={id}>
                                <View style={[styls.todayElements, { paddingVertical: DEFAUTL_SPACE }]}>
                                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingVertical: DEFAUTL_SPACE }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS, marginRight: DEFAUTL_SPACE }}>
                                                <IIcon name="md-notifications-outline" size={ICON_SIZE} style={{ transform: [{ rotateZ: '20deg' }] }} color={Colors.WHITE} />
                                            </View>
                                            <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>{"Remainder From " + "Dr. " + value._data.doctorName}</Text>
                                        </View>
                                        <Text>Be ready at {appointTime} for your  appointment</Text>
                                    </View>
                                </View>
                                <View style={{ height: 0.5, backgroundColor: Colors.GREY.LIGHT, marginHorizontal: -INLINE_GAP }}>
                                </View>
                            </View>) : null;
                        })}
                    </View>
                    <View style={{ height: 0.5, backgroundColor: Colors.GREY.LIGHT, marginHorizontal: -INLINE_GAP }}>
                    </View>
                    <View style={[styls.today, { marginTop: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, paddingHorizontal: INLINE_GAP, paddingVertical: DEFAUTL_SPACE }]}>
                        <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>Others</Text>
                        {props.appointments.map((value, id) => {
                            const [houre, minute] = convertTime12to24(value._data.activeSlot).split(':');
                            const appointTime = moment(new Date(value._data.activeYear, value._data.activeMonth, value._data.activeDate, houre, minute)).format('dddd, MMMM Do, h:mm a');
                            const appointDate = moment(new Date(value._data.activeYear, value._data.activeMonth, value._data.activeDate, houre, minute)).format('MMMM Do YYYY');
                            const nextDate = moment(new Date()).add(1, "days").format('MMMM Do YYYY');
                            return appointDate > nextDate ? (<View style={{ flexDirection: 'column' }} key={id}>
                                <View style={[styls.todayElements, { paddingVertical: DEFAUTL_SPACE }]}>
                                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingVertical: DEFAUTL_SPACE }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS, marginRight: DEFAUTL_SPACE }}>
                                                <IIcon name="md-notifications-outline" size={ICON_SIZE} style={{ transform: [{ rotateZ: '20deg' }] }} color={Colors.WHITE} />
                                            </View>
                                            <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>{"Remainder From " + "Dr. " + value._data.doctorName}</Text>
                                        </View>
                                        <Text>Be ready at {appointTime} for your  appointment</Text>
                                    </View>
                                </View>
                                <View style={{ height: 0.5, backgroundColor: Colors.GREY.LIGHT, marginHorizontal: -INLINE_GAP }}>
                                </View>
                            </View>) : null;
                        })}
                        <View style={{ height: 0.5, backgroundColor: Colors.GREY.LIGHT, marginHorizontal: -INLINE_GAP }}>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
const mapStatetoProps = (state: any) => {
    return {
        appointments: state.project.appointments,
    }
}
export default connect(mapStatetoProps)(Notification);
const styls = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: Colors.HOME_BCK
    },
    today: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    todayElements: {
        flexDirection: 'column',
    },
    fontstyle: {

    },
    shadow: {
        shadowColor: Colors.GREY.SIMPLE,
        shadowOpacity: 0.9,
        shadowRadius: 3.3,
        elevation: 1,
    },
})
