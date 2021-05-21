import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Header from '../header/header'
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import EIcon from 'react-native-vector-icons/Entypo'
import { ScrollView } from 'react-native-gesture-handler';


const AppointmentReq = (props: { navigation: any }) => {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, FONT_LARGE, SMALL_BUTTON_HEIGHT, BUTTON_HEIGHT, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const [activeMonth, setActiveMonth] = useState('sun');
    const [activeMorningSlot, setActiveMorningSlot] = useState('10:10');
    const [activeAfterNoonSlot, setActiveAfterNoonSlot] = useState('02:00');
    const [activeEveningSlot, setActiveEveningSlot] = useState('07:00');
    const [activeBookingtype, setActiveBookingtype] = useState('Online');
    const [activeBookingFee, setActiveBookingFee] = useState('2000');
    const headerComponnets = () =>
        <View>
            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold' }}>AppointmentReq</Text>
        </View>
    return (
        <>
            <Header template={headerComponnets} />
            <ScrollView style={{ flex: 1 }}>
                <View style={[styles.container]}>
                    <View style={[styles.monthSelector, { paddingHorizontal: INLINE_GAP, marginVertical: DEFAUTL_SPACE }]}>
                        <Text style={[styles.fontStyle, { fontSize: FONT_MID, color: Colors.BLACK }]}>Auguest</Text>
                        <EIcon name="triangle-down" size={ICON_SIZE - 5} />
                    </View>
                    <View style={[styles.daySelector, { backgroundColor: Colors.WHITE, paddingVertical: INLINE_GAP, paddingHorizontal: INLINE_GAP }]}>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeMonth == 'sun' ? BORDER_RADIUS : 0, backgroundColor: activeMonth == 'sun' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveMonth('sun')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeMonth == 'sun' ? Colors.WHITE : Colors.BLACK }}>
                                Sun
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeMonth == 'sun' ? Colors.WHITE : Colors.BLACK }}>
                                01
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeMonth == 'mon' ? BORDER_RADIUS : 0, backgroundColor: activeMonth == 'mon' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveMonth('mon')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeMonth == 'mon' ? Colors.WHITE : Colors.BLACK }}>
                                Mon
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeMonth == 'mon' ? Colors.WHITE : Colors.BLACK }}>
                                02
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeMonth == 'tue' ? BORDER_RADIUS : 0, backgroundColor: activeMonth == 'tue' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveMonth('tue')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeMonth == 'tue' ? Colors.WHITE : Colors.BLACK }}>
                                Tue
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeMonth == 'tue' ? Colors.WHITE : Colors.BLACK }}>
                                03
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeMonth == 'wed' ? BORDER_RADIUS : 0, backgroundColor: activeMonth == 'wed' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveMonth('wed')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeMonth == 'wed' ? Colors.WHITE : Colors.BLACK }}>
                                Wed
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeMonth == 'wed' ? Colors.WHITE : Colors.BLACK }}>
                                04
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeMonth == 'thu' ? BORDER_RADIUS : 0, backgroundColor: activeMonth == 'thu' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveMonth('thu')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeMonth == 'thu' ? Colors.WHITE : Colors.BLACK }}>
                                Thu
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeMonth == 'thu' ? Colors.WHITE : Colors.BLACK }}>
                                05
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeMonth == 'fri' ? BORDER_RADIUS : 0, backgroundColor: activeMonth == 'fri' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveMonth('fri')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeMonth == 'fri' ? Colors.WHITE : Colors.BLACK }}>
                                Fri
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeMonth == 'fri' ? Colors.WHITE : Colors.BLACK }}>
                                06
                       </Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.daySelComponent, { height: 90, width: 50, borderRadius: activeMonth == 'sat' ? BORDER_RADIUS : 0, backgroundColor: activeMonth == 'sat' ? Colors.PRIMARY : Colors.WHITE }]} onPress={() => setActiveMonth('sat')}>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', paddingBottom: DEFAUTL_SPACE, color: activeMonth == 'sat' ? Colors.WHITE : Colors.BLACK }}>
                                Sat
                       </Text>
                            <Text style={{ fontSize: moderateScale(FONT_SMALL), color: activeMonth == 'sat' ? Colors.WHITE : Colors.BLACK }}>
                                07
                       </Text>
                        </Pressable>

                    </View>
                    <View style={{ flexDirection: 'column', marginHorizontal: INLINE_GAP, alignItems: 'stretch' }}>
                        <View style={[styles.morningSlot, { marginVertical: INLINE_GAP }]}>
                            <Text >Morning Slots</Text>
                            <View style={[styles.morningSlotComponents]}>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeMorningSlot == '10:10' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveMorningSlot('10:10')}>
                                    <Text style={{ color: activeMorningSlot == '10:10' ? Colors.WHITE : Colors.BLACK }}>10:10 am</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeMorningSlot == '10:30' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveMorningSlot('10:30')}>
                                    <Text style={{ color: activeMorningSlot == '10:30' ? Colors.WHITE : Colors.BLACK }}>10:30 am</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeMorningSlot == '10:50' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveMorningSlot('10:50')}>
                                    <Text style={{ color: activeMorningSlot == '10:50' ? Colors.WHITE : Colors.BLACK }}>10:50 am</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeMorningSlot == '11:10' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveMorningSlot('11:10')}>
                                    <Text style={{ color: activeMorningSlot == '11:10' ? Colors.WHITE : Colors.BLACK }}>11:20 am</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeMorningSlot == '11:30' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveMorningSlot('11:30')}>
                                    <Text style={{ color: activeMorningSlot == '11:30' ? Colors.WHITE : Colors.BLACK }}>11:40 am</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={[styles.morningSlot, { marginVertical: INLINE_GAP }]}>
                            <Text >Afternoon Slots</Text>
                            <View style={[styles.morningSlotComponents]}>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeAfterNoonSlot == '02:00' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveAfterNoonSlot('02:00')}>
                                    <Text style={{ color: activeAfterNoonSlot == '02:00' ? Colors.WHITE : Colors.BLACK }}>02:00 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeAfterNoonSlot == '02:20' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveAfterNoonSlot('02:20')}>
                                    <Text style={{ color: activeAfterNoonSlot == '02:20' ? Colors.WHITE : Colors.BLACK }}>02:20 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeAfterNoonSlot == '02:40' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveAfterNoonSlot('02:40')}>
                                    <Text style={{ color: activeAfterNoonSlot == '02:40' ? Colors.WHITE : Colors.BLACK }}>02:40 pm</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={[styles.morningSlot, { marginVertical: INLINE_GAP }]}>
                            <Text >Evening Slots</Text>
                            <View style={[styles.morningSlotComponents]}>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeEveningSlot == '07:00' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveEveningSlot('07:00')}>
                                    <Text style={{ color: activeEveningSlot == '07:00' ? Colors.WHITE : Colors.BLACK }}>07:00 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeEveningSlot == '07:20' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveEveningSlot('07:20')}>
                                    <Text style={{ color: activeEveningSlot == '07:20' ? Colors.WHITE : Colors.BLACK }}>07:20 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeEveningSlot == '07:40' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveEveningSlot('07:40')}>
                                    <Text style={{ color: activeEveningSlot == '07:40' ? Colors.WHITE : Colors.BLACK }}>07:40 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeEveningSlot == '08:00' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveEveningSlot('08:00')}>
                                    <Text style={{ color: activeEveningSlot == '08:00' ? Colors.WHITE : Colors.BLACK }}>08:00 pm</Text>
                                </Pressable>
                                <Pressable style={({ pressed }) => [styles.morningSlotElement, { width: 100, height: 40, backgroundColor: activeEveningSlot == '08:20' ? Colors.PRIMARY : Colors.WHITE, borderRadius: BORDER_RADIUS, marginTop: DEFAUTL_SPACE, marginRight: INLINE_GAP, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => setActiveEveningSlot('08:20')}>
                                    <Text style={{ color: activeEveningSlot == '08:20' ? Colors.WHITE : Colors.BLACK }}>08:20 pm</Text>
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
                        <Pressable style={({ pressed }) => [{ paddingVertical: COMMON_BUTTON_HEIGHT, backgroundColor: Colors.PRIMARY, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', marginVertical: DEFAUTL_SPACE, transform: [{ scale: pressed ? 0.95 : 1 }] }]} onPress={() => props.navigation.push('Payment')}>
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

    }
})
