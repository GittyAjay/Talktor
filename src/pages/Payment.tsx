import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import Header from '../header/header'
import AIcon from 'react-native-vector-icons/AntDesign'
import FIcon from 'react-native-vector-icons/FontAwesome'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FTcon from 'react-native-vector-icons/Fontisto'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'

const Payment = (props: { navigation: any }) => {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, WIDTH, FONT_LARGE, SMALL_BUTTON_HEIGHT, BUTTON_HEIGHT, SMALL_DOT_SIZE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const [paymentMethod, setPaymentMethod] = useState('Card');
    const [cardNumber, setCardNumber] = useState('....   ....    9947');
    const [nameOnCard, setNameOnCard] = useState('Ajay Kumar Pandey');
    const [expirationDate, setExpirationDate] = useState('11');
    const [expirationMonth, setExpirationMonth] = useState('47');
    const [securityCode, setSecurityCode] = useState('11');
    const headerComponnets = () =>
        <View>
            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold' }}>Payment</Text>
        </View>
    return (
        <>
            <Header template={headerComponnets} />
            <View style={[styles.container]}>
                <ScrollView horizontal={true} style={{ maxHeight: 100 }} showsHorizontalScrollIndicator={false} >
                    <View style={[styles.paymentMethod, { paddingVertical: INLINE_GAP, marginHorizontal: INLINE_GAP, height: 100 }]}>
                        <Pressable onPress={() => setPaymentMethod('Card')} style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 150, height: 50, backgroundColor: paymentMethod == 'Card' ? Colors.PRIMARY_LIGHT : Colors.WHITE, borderRadius: BORDER_RADIUS, borderWidth: 2, borderColor: paymentMethod == 'Card' ? Colors.PRIMARY : Colors.GREY.SIMPLE, marginRight: DEFAUTL_SPACE }]}>
                            <AIcon name="creditcard" size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE }} color={paymentMethod == 'Card' ? Colors.PRIMARY : Colors.BLACK} />
                            <Text style={{ color: paymentMethod == 'Card' ? Colors.PRIMARY : Colors.BLACK, fontWeight: 'bold' }}>Card</Text>
                        </Pressable>

                        <Pressable onPress={() => setPaymentMethod('PhonePay')} style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 150, height: 50, backgroundColor: paymentMethod == 'PhonePay' ? Colors.PRIMARY_LIGHT : Colors.WHITE, borderRadius: BORDER_RADIUS, borderWidth: 2, borderColor: paymentMethod == 'PhonePay' ? Colors.PRIMARY : Colors.GREY.SIMPLE, marginRight: DEFAUTL_SPACE }]}>
                            <MIcon name="contactless-payment-circle" color={paymentMethod == 'PhonePay' ? Colors.PRIMARY : Colors.BLACK} size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE }} />
                            <Text style={{ color: paymentMethod == 'PhonePay' ? Colors.PRIMARY : Colors.BLACK, fontWeight: 'bold' }}>PhonePay</Text>
                        </Pressable>

                        <Pressable onPress={() => setPaymentMethod('GooglePay')} style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 150, height: 50, backgroundColor: paymentMethod == 'GooglePay' ? Colors.PRIMARY_LIGHT : Colors.WHITE, borderRadius: BORDER_RADIUS, borderWidth: 2, borderColor: paymentMethod == 'GooglePay' ? Colors.PRIMARY : Colors.GREY.SIMPLE, marginRight: DEFAUTL_SPACE }]}>
                            <MIcon name="contactless-payment-circle" color={paymentMethod == 'GooglePay' ? Colors.PRIMARY : Colors.BLACK} size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE }} />
                            <Text style={{ color: paymentMethod == 'GooglePay' ? Colors.PRIMARY : Colors.BLACK, fontWeight: 'bold' }}>GooglePay</Text>
                        </Pressable>

                        <Pressable onPress={() => setPaymentMethod('PayTm')} style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 150, height: 50, backgroundColor: paymentMethod == 'PayTm' ? Colors.PRIMARY_LIGHT : Colors.WHITE, borderRadius: BORDER_RADIUS, borderWidth: 2, borderColor: paymentMethod == 'PayTm' ? Colors.PRIMARY : Colors.GREY.SIMPLE, marginRight: DEFAUTL_SPACE }]}>
                            <MIcon name="contactless-payment-circle" color={paymentMethod == 'PayTm' ? Colors.PRIMARY : Colors.BLACK} size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE }} />
                            <Text style={{ color: paymentMethod == 'PayTm' ? Colors.PRIMARY : Colors.BLACK, fontWeight: 'bold' }}>PayTm</Text>
                        </Pressable>
                    </View>

                </ScrollView>
                <ScrollView style={{ flex: 1 }}>
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[Colors.SECONDARY, Colors.PRIMARY]}
                        style={[styles.debitCard, { borderRadius: BORDER_RADIUS, height: 200, marginHorizontal: INLINE_GAP }]}>
                        <View style={{ flexDirection: 'column', alignItems: 'flex-start', paddingHorizontal: INLINE_GAP, paddingVertical: INLINE_GAP }}>
                            <FIcon name="credit-card-alt" size={ICON_SIZE + 20} color={Colors.WHITE} />
                            <View style={{ flexDirection: 'row', marginTop: INLINE_GAP }}>
                                <View style={{ flexDirection: 'row', marginRight: DEFAUTL_SPACE, justifyContent: 'center', alignItems: 'center' }}>
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                </View>
                                <View style={{ flexDirection: 'row', marginRight: DEFAUTL_SPACE, justifyContent: 'center', alignItems: 'center' }}>
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                </View>
                                <View style={{ flexDirection: 'row', marginRight: DEFAUTL_SPACE, justifyContent: 'center', alignItems: 'center' }}>
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                    <FTcon name="ellipse" color={Colors.WHITE} size={SMALL_DOT_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: moderateScale(FONT_SMALL), color: Colors.WHITE, fontWeight: 'bold', paddingRight: 1 }}>9</Text>
                                    <Text style={{ fontSize: moderateScale(FONT_SMALL), color: Colors.WHITE, fontWeight: 'bold', paddingRight: 1 }}>9</Text>
                                    <Text style={{ fontSize: moderateScale(FONT_SMALL), color: Colors.WHITE, fontWeight: 'bold', paddingRight: 1 }}>4</Text>
                                    <Text style={{ fontSize: moderateScale(FONT_SMALL), color: Colors.WHITE, fontWeight: 'bold', paddingRight: 1 }}>7</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: Colors.WHITE }}>Valid Thru: {expirationDate}/{expirationMonth}</Text>
                            </View>
                        </View>
                        <LinearGradient
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0.6, y: 1 }}
                            colors={[Colors.SECONDARY, Colors.PRIMARY]} style={{ height: 50, backgroundColor: Colors.PRIMARY, borderBottomLeftRadius: BORDER_RADIUS, borderBottomEndRadius: BORDER_RADIUS, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: INLINE_GAP, flexDirection: 'row' }}>
                            <Text style={{ color: Colors.WHITE, fontWeight: 'bold' }}>{nameOnCard}</Text>
                            <Image source={require('../assets/images/visa.png')} style={{ width: 70, height: 22 }} />
                        </LinearGradient>
                    </LinearGradient>
                    <View style={[styles.form, { marginHorizontal: INLINE_GAP, paddingVertical: INLINE_GAP, alignItems: 'stretch' }]}>
                        <Pressable style={({ pressed }) => [{ marginBottom: INLINE_GAP }]}>
                            <Text style={{ color: Colors.GREY.SIMPLE }}>Card number</Text>
                            <TextInput value={cardNumber} style={{ borderBottomColor: Colors.GREY.SIMPLE, borderBottomWidth: 1 }} onChangeText={text => setCardNumber(text)} />
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ marginBottom: INLINE_GAP }]}>
                            <Text style={{ color: Colors.GREY.SIMPLE }}>Name On Card</Text>
                            <TextInput value={nameOnCard} style={{ borderBottomColor: Colors.GREY.SIMPLE, borderBottomWidth: 1 }} onChangeText={name => setNameOnCard(name.toUpperCase())} autoCapitalize="characters" />
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ marginBottom: INLINE_GAP }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <View style={{ flexDirection: 'column', marginRight: INLINE_GAP }}>
                                    <Text style={{ color: Colors.GREY.SIMPLE }}>Expiration Date</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TextInput value={expirationDate} style={{ borderBottomColor: Colors.GREY.SIMPLE, borderBottomWidth: 1, marginRight: INLINE_GAP }} onChangeText={date => setExpirationDate(date)} />
                                        <TextInput value={expirationMonth} style={{ borderBottomColor: Colors.GREY.SIMPLE, borderBottomWidth: 1 }} onChangeText={month => setExpirationMonth(month)} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: Colors.GREY.SIMPLE }}>Security Code</Text>
                                    <TextInput value={securityCode} style={{ borderBottomColor: Colors.GREY.SIMPLE, borderBottomWidth: 1, marginRight: INLINE_GAP }} onChangeText={secCode => setSecurityCode(secCode)} />
                                </View>
                            </View>
                        </Pressable>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.fontStyle, { fontWeight: 'bold', fontSize: moderateScale(FONT_LARGE) }]}>Total Price</Text>
                            <Text style={[styles.fontStyle, { fontWeight: 'bold', fontSize: moderateScale(FONT_LARGE) }]}>₹2000,0</Text>
                        </View>
                        <Pressable style={({ pressed }) => [{ paddingVertical: moderateScale(COMMON_BUTTON_HEIGHT), backgroundColor: Colors.PRIMARY, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', marginVertical: INLINE_GAP, transform: [{ scale: pressed ? 0.95 : 1 }] }]} onPress={() => props.navigation.push('AppointmentRes')}>
                            <Text style={[styles.fontStyle, { fontSize: moderateScale(FONT_MID), color: Colors.WHITE, fontWeight: 'bold' }]}>Confirm</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: Colors.WHITE
    },
    paymentMethod: {
        flexDirection: 'row',
    },
    debitCard: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch'
    },
    fontStyle: {

    },
    form: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})
export default Payment
