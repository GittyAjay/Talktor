import React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView } from 'react-native'
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import StatusBar from '../styles/statusBar'
import { Image } from 'react-native'
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EIcon from 'react-native-vector-icons/Entypo';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { scale, moderateScale } from 'react-native-size-matters';
import { color } from 'react-native-reanimated';
import Slider from '../components/HomeSlider'

export default function Home() {
    const { WIDTH, HEIGHT, BORDER_RADIUS_CIRCULAR, FONT_ELARGE, FONT_MID, FONT_LARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE } = Numericals();
    return (
        <SafeAreaView style={{ marginTop: INLINE_GAP }}>
            <StatusBar color={Colors.HOME_BCK} />
            <ScrollView >
                <View style={[styles.container, { marginHorizontal: INLINE_GAP, backgroundColor: Colors.HOME_BCK }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Pressable style={({ pressed }) => [{ width: 47, height: 48, opacity: pressed ? 0.8 : 1, borderRadius: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, justifyContent: 'center', alignItems: 'center', shadowColor: Colors.GREY.SIMPLE, elevation: DEFAUTL_SPACE }]}>
                            <Image source={require('../assets/images/menuRight.png')} />
                        </Pressable>
                        <Image source={require('../assets/images/profileImg.png')} />
                    </View>
                    <View style={{ justifyContent: 'flex-start', marginVertical: DEFAUTL_SPACE }}>
                        <Text style={{ fontFamily: "Museo700-Regular", fontSize: moderateScale(FONT_ELARGE) }}>Let's find your Specialist</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between' }}>
                        <View style={{ flex: 0.98, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: Colors.WHITE, padding: DEFAUTL_SPACE, borderRadius: BORDER_RADIUS }}>
                            <TextInput placeholder="Search a doctor..." style={{ fontSize: moderateScale(FONT_MID) }} />
                            <AIcon name="search1" color={Colors.BLACK} size={ICON_SIZE} />
                        </View>
                        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1, justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, backgroundColor: Colors.PRIMARY, borderRadius: 2 * BORDER_RADIUS }]}>
                            <FIcon name="sliders" size={ICON_SIZE} color={Colors.WHITE} />
                        </Pressable>
                    </View>
                    <View style={{ marginVertical: DEFAUTL_SPACE }}>
                        <Text style={{ fontFamily: "Museo700-Regular", fontSize: FONT_LARGE }}>Find your doctors</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }}>
                            <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Heart</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }}>
                            <AIcon name="eye" color={Colors.PRIMARY} size={ICON_SIZE} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Eye</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }}>
                            <MIcon name="head" color={Colors.RED} size={ICON_SIZE} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Head</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }}>
                            <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Heart</Text>
                        </View>
                    </ScrollView>
                    <ScrollView horizontal={true} style={{ marginVertical: 2 * INLINE_GAP }} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 130, width: 300, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Image source={require('../assets/images/doctor.png')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: FONT_MID, fontWeight: 'bold' }}>Dr. Robert Adler</Text>
                                        <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS_CIRCULAR, marginLeft: DEFAUTL_SPACE }}>
                                            <AIcon name="check" color={Colors.WHITE} size={ICON_SIZE / 2} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                            <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                            <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                            <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                            <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        </View>
                                        <Text style={{ fontSize: FONT_MID }}>(4.8)</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: Colors.GREY.LIGHT }}>Assistant Professor of Radiology</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: Colors.CYAN }}>Specialist: </Text>
                                        <Text style={{ color: Colors.GREY.LIGHT }}>Radiology</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 130, width: 300, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Image source={require('../assets/images/doctor.png')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: FONT_MID, fontWeight: 'bold' }}>Dr. Robert Adler</Text>
                                        <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS_CIRCULAR, marginLeft: DEFAUTL_SPACE }}>
                                            <AIcon name="check" color={Colors.WHITE} size={ICON_SIZE / 2} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                            <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                            <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                            <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                            <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        </View>
                                        <Text style={{ fontSize: FONT_MID }}>(4.8)</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: Colors.GREY.LIGHT }}>Assistant Professor of Radiology</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: Colors.CYAN }}>Specialist: </Text>
                                        <Text style={{ color: Colors.GREY.LIGHT }}>Radiology</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: scale(FONT_MID), fontFamily: 'Museo700-Regular' }}>Upcoming schedules</Text>
                        <TouchableOpacity>
                            <Text style={{ color: Colors.CYAN }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: DEFAUTL_SPACE }}>
                        <Slider />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
})
