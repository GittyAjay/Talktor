import React from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import { ScrollView } from 'react-native-gesture-handler';
import EIcon from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'

export default function Doctors(props: { navigation: any }) {
    const { INLINE_GAP, DEFAUTL_SPACE, BORDER_RADIUS, FONT_MID, FONT_SMALL, ICON_SIZE } = Numericals();
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={[styles.container, { paddingVertical: INLINE_GAP, }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: DEFAUTL_SPACE }}>
                    <Pressable style={({ pressed }) => [styles.card, styles.shadow, { width: 190, height: 180, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, padding: DEFAUTL_SPACE, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('DoctorIntro')}>
                        <View>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>Sanboq erotica</Text>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, }}>Heart Specialist</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: DEFAUTL_SPACE }}>
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Experience</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>8 year</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Patients</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>1.08k</Text>
                            </View>
                        </View>
                        <LinearGradient
                            start={{ x: 1, y: 0.9 }}
                            end={{ x: 0.8, y: 0 }}
                            colors={[Colors.WHITE, Colors.WHITE]}
                            style={{ height: 150, justifyContent: 'center' }}
                        >
                            <Image source={require('../assets/images/doctor1.png')} style={{ width: 70 }} />
                        </LinearGradient>
                    </Pressable>
                    <Pressable style={({ pressed }) => [styles.card, { width: 190, height: 180, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('DoctorIntro')}>
                        <View>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>Sanboq erotica</Text>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, }}>Heart Specialist</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: DEFAUTL_SPACE }}>
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Experience</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>8 year</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Patients</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>1.08k</Text>
                            </View>
                        </View>
                        <View >
                            <Image source={require('../assets/images/doctor1.png')} style={{ width: 70 }} />
                        </View>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: DEFAUTL_SPACE }}>
                    <Pressable style={({ pressed }) => [styles.card, { width: 190, height: 180, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('DoctorIntro')}>
                        <View>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>Sanboq erotica</Text>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, }}>Heart Specialist</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: DEFAUTL_SPACE }}>
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Experience</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>8 year</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Patients</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>1.08k</Text>
                            </View>
                        </View>
                        <View >
                            <Image source={require('../assets/images/doctor1.png')} style={{ width: 70 }} />
                        </View>
                    </Pressable>
                    <Pressable style={({ pressed }) => [styles.card, { width: 190, height: 180, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('DoctorIntro')}>
                        <View>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>Sanboq erotica</Text>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, }}>Heart Specialist</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: DEFAUTL_SPACE }}>
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Experience</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>8 year</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Patients</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>1.08k</Text>
                            </View>
                        </View>
                        <View >
                            <Image source={require('../assets/images/doctor1.png')} style={{ width: 70 }} />
                        </View>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: DEFAUTL_SPACE }}>
                    <Pressable style={({ pressed }) => [styles.card, { width: 190, height: 180, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('DoctorIntro')}>
                        <View>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>Sanboq erotica</Text>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, }}>Heart Specialist</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: DEFAUTL_SPACE }}>
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Experience</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>8 year</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Patients</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>1.08k</Text>
                            </View>
                        </View>
                        <View >
                            <Image source={require('../assets/images/doctor1.png')} style={{ width: 70 }} />
                        </View>
                    </Pressable>
                    <Pressable style={({ pressed }) => [styles.card, { width: 190, height: 180, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('DoctorIntro')}>
                        <View>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>Sanboq erotica</Text>
                            <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, }}>Heart Specialist</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: DEFAUTL_SPACE }}>
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                                <EIcon name="star" size={ICON_SIZE - 5} color={Colors.STAR_COLOR} />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Experience</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>8 year</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Patients</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>1.08k</Text>
                            </View>
                        </View>
                        <View >
                            <Image source={require('../assets/images/doctor1.png')} style={{ width: 70 }} />
                        </View>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: Colors.HOME_BCK
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: Colors.GREY.SIMPLE,
        shadowOpacity: 0.9,
        shadowRadius: 3.3,
        elevation: 1,
    },
    textstyle: {
        fontSize: 30,
        color: 'red'
    }
})
