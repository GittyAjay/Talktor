import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Header from '../header/header'
import firestore from '@react-native-firebase/firestore';
import { scale, moderateScale, s } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import EIcon from 'react-native-vector-icons/Entypo'
import { ScrollView } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import firebase from '@react-native-firebase/app';
import RazorpayCheckout from 'react-native-razorpay';

const AppointmentReq = (props: { navigation: any }) => {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, FONT_LARGE, SMALL_BUTTON_HEIGHT, BUTTON_HEIGHT, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const [activeDay, setActiveDay] = useState('sun');
    const [activeSlot, setActiveSlot] = useState('');
    const [activeBookingFee, setActiveBookingFee] = useState('');
    const [activeBookingtype, setActiveBookingtype] = useState('');
    const [activeMonth, setActiveMonth] = useState('Select Here..');
    const [monthClick, setmonthClick] = useState(true)
    const [uid, setUid] = useState('');
    const razorPay = () => {
        var options = {
            description: 'Apointment fee',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_wUHnmt6Oxeky5O',
            amount: '2000',
            name: 'Talktor',
            prefill: {
                email: 'rightmajay@gmail.com',
                contact: '9129633003',
                name: 'Ajay Pandey'
            },
            theme: { color: Colors.PRIMARY }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            const payId = data.razorpay_payment_id;
            const obj = {
                activeMonth: activeMonth,
                activeDay: activeDay,
                activeSlot: activeSlot,
                activeBookingtype: activeBookingtype,
                activeBookingFee: activeBookingFee,
                paymentId: payId
            }
            alert(`Success: ${payId}`);
            props.navigation.push('AppointmentRes', { payload: obj })
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });
    }
    async function onSubmit() {
        const ref = firestore().collection('Users').doc(uid).collection("appointments");
        ref.add(
            {
                activeMonth: activeMonth,
                activeDay: activeDay,
                activeSlot: activeSlot,
                activeBookingtype: activeBookingtype,
                activeBookingFee: activeBookingFee,
            }
        ).then(res => props.navigation.push('Payment'))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUid(user.uid)
            }
        });
    }, [])

    const headerComponnets = () =>
        <View>
            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold' }}>Appointment</Text>
        </View>
    return (
        <>
            <Header template={headerComponnets} />
            <ScrollView style={{ flex: 1 }}>
                <View style={[styles.container]}>
                    <View style={[styles.monthSelector, { paddingHorizontal: INLINE_GAP, marginVertical: DEFAUTL_SPACE }]}>
                        <Pressable style={{ flexDirection: 'row' }} onPress={() => setmonthClick(false)}>
                            <ModalDropdown defaultIndex={0} disabled={monthClick} defaultValue={activeMonth} textStyle={{ fontSize: FONT_MID }} dropdownStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: DEFAUTL_SPACE, height: 100 }} options={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} onSelect={(idx, value) => setActiveMonth(value)}>
                            </ModalDropdown>
                            <EIcon name="chevron-small-down" size={ICON_SIZE} />
                        </Pressable>
                    </View>
                    <View style={[styles.daySelector, { backgroundColor: Colors.WHITE, paddingVertical: INLINE_GAP, paddingHorizontal: INLINE_GAP }]}>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeDay == 'Sunday' ? BORDER_RADIUS : 0, backgroundColor: activeDay == 'Sunday' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveDay('Sunday')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeDay == 'Sunday' ? Colors.WHITE : Colors.BLACK }}>
                                Sun
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeDay == 'Sunday' ? Colors.WHITE : Colors.BLACK }}>
                                01
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeDay == 'Monday' ? BORDER_RADIUS : 0, backgroundColor: activeDay == 'Monday' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveDay('Monday')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeDay == 'Monday' ? Colors.WHITE : Colors.BLACK }}>
                                Mon
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeDay == 'Monday' ? Colors.WHITE : Colors.BLACK }}>
                                02
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeDay == 'Tuesday' ? BORDER_RADIUS : 0, backgroundColor: activeDay == 'Tuesday' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveDay('Tuesday')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeDay == 'Tuesday' ? Colors.WHITE : Colors.BLACK }}>
                                Tue
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeDay == 'Tuesday' ? Colors.WHITE : Colors.BLACK }}>
                                03
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeDay == 'Wednesday' ? BORDER_RADIUS : 0, backgroundColor: activeDay == 'Wednesday' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveDay('Wednesday')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeDay == 'Wednesday' ? Colors.WHITE : Colors.BLACK }}>
                                Wed
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeDay == 'Wednesday' ? Colors.WHITE : Colors.BLACK }}>
                                04
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeDay == 'Thursday' ? BORDER_RADIUS : 0, backgroundColor: activeDay == 'Thursday' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveDay('Thursday')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeDay == 'Thursday' ? Colors.WHITE : Colors.BLACK }}>
                                Thu
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeDay == 'Thursday' ? Colors.WHITE : Colors.BLACK }}>
                                05
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeDay == 'Friday' ? BORDER_RADIUS : 0, backgroundColor: activeDay == 'Friday' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveDay('Friday')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeDay == 'Friday' ? Colors.WHITE : Colors.BLACK }}>
                                Fri
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeDay == 'Friday' ? Colors.WHITE : Colors.BLACK }}>
                                06
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeDay == 'Saturday' ? BORDER_RADIUS : 0, backgroundColor: activeDay == 'Saturday' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveDay('Saturday')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeDay == 'Saturday' ? Colors.WHITE : Colors.BLACK }}>
                                Sat
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeDay == 'Saturday' ? Colors.WHITE : Colors.BLACK }}>
                                07
                       </Text>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'column', marginHorizontal: INLINE_GAP, alignItems: 'stretch' }}>
                        <View style={[styles.morningSlot, { marginVertical: INLINE_GAP }]}>
                            <Text >Morning Slots</Text>
                            <View style={[styles.morningSlotComponents]}>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '10:10am' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => { setActiveSlot('10:10am') }}>
                                    <Text style={{ color: activeSlot == '10:10am' ? Colors.WHITE : Colors.BLACK }}>10:10 am</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '10:30am' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('10:30am')}>
                                    <Text style={{ color: activeSlot == '10:30am' ? Colors.WHITE : Colors.BLACK }}>10:30 am</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '10:50am' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('10:50am')}>
                                    <Text style={{ color: activeSlot == '10:50am' ? Colors.WHITE : Colors.BLACK }}>10:50 am</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '11:10am' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('11:10am')}>
                                    <Text style={{ color: activeSlot == '11:10am' ? Colors.WHITE : Colors.BLACK }}>11:20 am</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '11:30am' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('11:30am')}>
                                    <Text style={{ color: activeSlot == '11:30am' ? Colors.WHITE : Colors.BLACK }}>11:40 am</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={[styles.morningSlot, { marginVertical: INLINE_GAP }]}>
                            <Text >Afternoon Slots</Text>
                            <View style={[styles.morningSlotComponents]}>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '02:00pm' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('02:00pm')}>
                                    <Text style={{ color: activeSlot == '02:00pm' ? Colors.WHITE : Colors.BLACK }}>02:00 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '02:20pm' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('02:20pm')}>
                                    <Text style={{ color: activeSlot == '02:20pm' ? Colors.WHITE : Colors.BLACK }}>02:20 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '02:40pm' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('02:40pm')}>
                                    <Text style={{ color: activeSlot == '02:40pm' ? Colors.WHITE : Colors.BLACK }}>02:40 pm</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={[styles.morningSlot, { marginVertical: INLINE_GAP }]}>
                            <Text >Evening Slots</Text>
                            <View style={[styles.morningSlotComponents]}>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '07:00pm' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('07:00pm')}>
                                    <Text style={{ color: activeSlot == '07:00pm' ? Colors.WHITE : Colors.BLACK }}>07:00 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '07:20pm' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('07:20pm')}>
                                    <Text style={{ color: activeSlot == '07:20pm' ? Colors.WHITE : Colors.BLACK }}>07:20 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '07:40pm' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('07:40pm')}>
                                    <Text style={{ color: activeSlot == '07:40pm' ? Colors.WHITE : Colors.BLACK }}>07:40 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '08:00pm' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('08:00pm')}>
                                    <Text style={{ color: activeSlot == '08:00pm' ? Colors.WHITE : Colors.BLACK }}>08:00 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '08:20pm' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('08:20pm')}>
                                    <Text style={{ color: activeSlot == '08:20pm' ? Colors.WHITE : Colors.BLACK }}>08:20 pm</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={[styles.morningSlot, { marginVertical: INLINE_GAP }]}>
                            <Text >Booking Type</Text>
                            <View style={[styles.morningSlotComponents]}>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeBookingtype == 'Online' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveBookingtype('Online')}>
                                    <Text style={{ color: activeBookingtype == 'Online' ? Colors.WHITE : Colors.BLACK }}>Online</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeBookingtype == 'Offline' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveBookingtype('Offline')}>
                                    <Text style={{ color: activeBookingtype == 'Offline' ? Colors.WHITE : Colors.BLACK }}>Offline</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={[styles.morningSlot, { marginVertical: INLINE_GAP }]}>
                            <Text >Booking Fee</Text>
                            <View style={[styles.morningSlotComponents]}>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeBookingFee == '2000' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveBookingFee('2000')}>
                                    <Text style={{ color: activeBookingFee == '2000' ? Colors.WHITE : Colors.BLACK }}>2000 ₹</Text>
                                </Pressable>
                            </View>
                        </View>
                        <Pressable style={({ pressed }) => [{ paddingVertical: COMMON_BUTTON_HEIGHT, backgroundColor: Colors.PRIMARY, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', marginVertical: DEFAUTL_SPACE, transform: [{ scale: pressed ? 0.95 : 1 }] }]} onPress={() => razorPay()}>
                            <Text style={[styles.fontStyle, { fontSize: FONT_MID, color: Colors.WHITE, fontWeight: 'bold' }]}>Confirm Appointment</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>

        </>
    )
}

export default AppointmentReq

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: Colors.HOME_BCK
    },
    monthSelector: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    daySelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    daySelComponent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    morningSlot: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    morningSlotComponents: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    morningSlotElement: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontStyle: {

    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    }
})
