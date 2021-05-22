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
import IIcon from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { scale, moderateScale } from 'react-native-size-matters';
import { color } from 'react-native-reanimated';
import Slider from '../components/HomeSlider'

export default function Home(props: { navigation: any }) {
    const { WIDTH, HEIGHT, FONT_SMALL, BORDER_RADIUS_CIRCULAR, FONT_ELARGE, FONT_MID, FONT_LARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE } = Numericals();
    return (
        <SafeAreaView style={{ marginTop: INLINE_GAP }}>
            <StatusBar color={Colors.HOME_BCK} />
            <ScrollView >
                <View style={[styles.container, { backgroundColor: Colors.HOME_BCK }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: INLINE_GAP }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: moderateScale(FONT_MID) }}>Find Your</Text>
                            <Text style={{ fontFamily: "Museo700-Regular", fontSize: moderateScale(FONT_MID) }}>Specialist</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => props.navigation.push('Search')}>
                                <AIcon name="search1" color={Colors.BLACK} size={ICON_SIZE} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IIcon name="chatbubble-ellipses-outline" size={ICON_SIZE} style={{ paddingLeft: INLINE_GAP }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: DEFAUTL_SPACE }}>
                        <Slider />
                    </View>
                    <View style={{ marginVertical: DEFAUTL_SPACE, marginHorizontal: INLINE_GAP }}>
                        <Text style={{ fontFamily: "Museo700-Regular", fontSize: FONT_LARGE }}>Find your doctors</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: INLINE_GAP }}>
                        <Pressable style={({ pressed }) => [{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('SearchResult')}>
                            <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE + 10} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Heart</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('SearchResult')}>
                            <AIcon name="eye" color={Colors.PRIMARY} size={ICON_SIZE + 10} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Eye</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('SearchResult')}>
                            <MIcon name="head" color={Colors.RED} size={ICON_SIZE + 10} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Head</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('SearchResult')}>
                            <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE + 10} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Heart</Text>
                        </Pressable>
                    </ScrollView>

                    <View style={{ marginVertical: DEFAUTL_SPACE, marginHorizontal: INLINE_GAP, }}>
                        <Text style={{ fontFamily: "Museo700-Regular", fontSize: FONT_LARGE }}>Availble Doctors</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: INLINE_GAP }}>

                        <View style={{ flex: 1, justifyContent: 'space-between' }}>
                            <Pressable style={({ pressed }) => [{
                                width: 290,
                                height: 220,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginRight: DEFAUTL_SPACE,
                                backgroundColor: Colors.WHITE,
                                paddingHorizontal: DEFAUTL_SPACE,
                                marginVertical: DEFAUTL_SPACE,
                                borderRadius: BORDER_RADIUS,
                                transform: [{ scale: pressed ? 0.96 : 1 }]
                            }]}
                                onPress={() => props.navigation.push('DoctorIntro')}
                            >
                                <View style={{ flex: 1, justifyContent: 'space-between', padding: DEFAUTL_SPACE }}>
                                    <Text style={{ fontSize: FONT_MID, color: Colors.BLACK, }}>Maria daboria</Text>
                                    <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, }}>Brain Specialist</Text>
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
                                <View>
                                    <Image source={require('../assets/images/doctor.png')} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'space-between' }}>
                            <Pressable style={({ pressed }) => [{
                                width: 290,
                                height: 220,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginRight: DEFAUTL_SPACE,
                                backgroundColor: Colors.WHITE,
                                paddingHorizontal: DEFAUTL_SPACE,
                                marginVertical: DEFAUTL_SPACE,
                                borderRadius: BORDER_RADIUS,
                                transform: [{ scale: pressed ? 0.96 : 1 }]
                            }]}
                                onPress={() => props.navigation.push('DoctorIntro')}
                            >
                                <View style={{ flex: 1, justifyContent: 'space-between', padding: DEFAUTL_SPACE }}>
                                    <Text style={{ fontSize: FONT_MID, color: Colors.BLACK, }}>Sanboq erotica</Text>
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
                                    <Image source={require('../assets/images/doctor1.png')} />
                                </View>
                            </Pressable>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView >
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
