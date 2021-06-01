import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Header from '../header/header'
import firestore from '@react-native-firebase/firestore';
import { scale, moderateScale, s } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import EIcon from 'react-native-vector-icons/Entypo'
import FIcon from 'react-native-vector-icons/Fontisto'
import { ScrollView } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import firebase from '@react-native-firebase/app';
import RazorpayCheckout from 'react-native-razorpay';
import DateTimePicker from '@react-native-community/datetimepicker';

const AppointmentReq = (props: { navigation: any, route: { params: { item: {} } } }) => {
    let doctorDetails = props.route.params.item;
    // console.log("request", doctorDetails);

    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, FONT_LARGE, SMALL_BUTTON_HEIGHT, BUTTON_HEIGHT, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const [activeDay, setActiveDay] = useState(0);
    const [activeDate, setActiveDate] = useState(0);
    const [activeSlot, setActiveSlot] = useState('');
    const [activeBookingFee, setActiveBookingFee] = useState('');
    const [activeBookingtype, setActiveBookingtype] = useState('');
    const [activeMonth, setActiveMonth] = useState('');
    const [activeYear, setActiveYear] = useState(0);
    const [uid, setUid] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false);
    };
    useEffect(() => {
        setActiveDay(date.getDay())
        setActiveDate(date.getDate());
        setActiveMonth(date.getMonth());
        setActiveYear(date.getFullYear());
    }, [date])
    const razorPay = () => {
        var options = {
            description: 'Apointment fee',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_wUHnmt6Oxeky5O',
            amount: '200000',
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
            alert(`Success: ${payId}`);
            const obj = {
                doctorName: doctorDetails.name,
                activeDay: activeDay,
                activeDate: activeDate,
                activeMonth: activeMonth,
                activeYear: activeYear,
                activeSlot: activeSlot,
                activeBookingtype: activeBookingtype,
                activeBookingFee: activeBookingFee,
                paymentId: payId
            }
            //    const ref1 = firestore().collection('Doctors').doc(uid).collection("appointments");
            const ref = firestore().collection('Users').doc(uid).collection("appointments");
            ref.add(
                {
                    doctorName: doctorDetails.name,
                    activeDate: activeDate,
                    activeMonth: activeMonth,
                    activeYear: activeYear,
                    activeSlot: activeSlot,
                    activeBookingtype: activeBookingtype,
                    activeBookingFee: activeBookingFee,
                }
            ).then(res => props.navigation.push('AppointmentRes', { payload: obj }))
                .catch(error => console.log(error))
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });
    }
    function returnDay(day: number) {
        switch (day) {
            case 0:
                return "Sunday"
            case 1:
                return "Monday"
            case 2:
                return "Tuesday"
            case 3:
                return "Wednesday"
            case 4:
                return "Thursday"
            case 5:
                return "Friday"
            case 6:
                return "Saturday"
            default:
                return "Fuckday"
        }
    }
    async function onSubmit() {
        razorPay();
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
                <View style={[styles.container, { marginHorizontal: INLINE_GAP, marginTop: DEFAUTL_SPACE }]}>
                    <View style={{ flexDirection: 'column', alignItems: 'stretch', marginBottom: DEFAUTL_SPACE }}>
                        <Text >Select Date</Text>
                        <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 150, height: 40, backgroundColor: !show ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => { setShow(true) }}>
                            {/* {!show && <FIcon name="date" color={Colors.BLACK} size={ICON_SIZE} />} */}
                            {!show && <Text style={{ color: !show ? Colors.WHITE : Colors.BLACK }}>{returnDay(activeDay) + '/' + activeDate + '/' + (parseInt(activeMonth) + 1) + '/' + activeYear}</Text>}
                        </Pressable>
                        {show && <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="date"
                            minimumDate={new Date()}
                            is24Hour={false}
                            display="spinner"
                            onChange={onChange}
                        />}
                    </View>
                    <View style={[styles.morningSlot]}>
                        <Text >Morning Slots</Text>
                        <View style={[styles.morningSlotComponents]}>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '10:10 AM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => { setActiveSlot('10:10 AM') }}>
                                <Text style={{ color: activeSlot == '10:10 AM' ? Colors.WHITE : Colors.BLACK }}>10:10 am</Text>
                            </Pressable>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '10:30 AM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('10:30 AM')}>
                                <Text style={{ color: activeSlot == '10:30 AM' ? Colors.WHITE : Colors.BLACK }}>10:30 am</Text>
                            </Pressable>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '10:50 AM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('10:50 AM')}>
                                <Text style={{ color: activeSlot == '10:50 AM' ? Colors.WHITE : Colors.BLACK }}>10:50 am</Text>
                            </Pressable>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '11:10 AM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('11:10 AM')}>
                                <Text style={{ color: activeSlot == '11:10 AM' ? Colors.WHITE : Colors.BLACK }}>11:20 am</Text>
                            </Pressable>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '11:30 AM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('11:30 AM')}>
                                <Text style={{ color: activeSlot == '11:30 AM' ? Colors.WHITE : Colors.BLACK }}>11:40 am</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={[styles.morningSlot, { marginVertical: INLINE_GAP }]}>
                        <Text >Afternoon Slots</Text>
                        <View style={[styles.morningSlotComponents]}>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '02:00 PM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('02:00 PM')}>
                                <Text style={{ color: activeSlot == '02:00 PM' ? Colors.WHITE : Colors.BLACK }}>02:00 pm</Text>
                            </Pressable>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '02:20 PM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('02:20 PM')}>
                                <Text style={{ color: activeSlot == '02:20 PM' ? Colors.WHITE : Colors.BLACK }}>02:20 pm</Text>
                            </Pressable>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '02:40 PM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('02:40 PM')}>
                                <Text style={{ color: activeSlot == '02:40 PM' ? Colors.WHITE : Colors.BLACK }}>02:40 pm</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={[styles.morningSlot, { marginVertical: INLINE_GAP }]}>
                        <Text >Evening Slots</Text>
                        <View style={[styles.morningSlotComponents]}>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '07:00 PM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('07:00 PM')}>
                                <Text style={{ color: activeSlot == '07:00 PM' ? Colors.WHITE : Colors.BLACK }}>07:00 pm</Text>
                            </Pressable>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '07:20 PM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('07:20 PM')}>
                                <Text style={{ color: activeSlot == '07:20 PM' ? Colors.WHITE : Colors.BLACK }}>07:20 pm</Text>
                            </Pressable>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '07:40 PM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('07:40 PM')}>
                                <Text style={{ color: activeSlot == '07:40 PM' ? Colors.WHITE : Colors.BLACK }}>07:40 pm</Text>
                            </Pressable>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '08:00 PM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('08:00 PM')}>
                                <Text style={{ color: activeSlot == '08:00 PM' ? Colors.WHITE : Colors.BLACK }}>08:00 pm</Text>
                            </Pressable>
                            <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeSlot == '08:20 PM' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveSlot('08:20 PM')}>
                                <Text style={{ color: activeSlot == '08:20 PM' ? Colors.WHITE : Colors.BLACK }}>08:20 pm</Text>
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
                    <Pressable style={({ pressed }) => [{ paddingVertical: COMMON_BUTTON_HEIGHT, backgroundColor: Colors.PRIMARY, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', marginVertical: DEFAUTL_SPACE, transform: [{ scale: pressed ? 0.95 : 1 }] }]} onPress={() => onSubmit()}>
                        <Text style={[styles.fontStyle, { fontSize: FONT_MID, color: Colors.WHITE, fontWeight: 'bold' }]}>Confirm Appointment</Text>
                    </Pressable>
                </View>
            </ScrollView >

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
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
})
