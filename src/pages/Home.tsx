import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView } from 'react-native'
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import StatusBar from '../styles/statusBar'
import { Image } from 'react-native'
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import F5Icon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MATIcon from 'react-native-vector-icons/MaterialIcons';
import EIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { scale, moderateScale } from 'react-native-size-matters';
import Slider from '../components/HomeSlider'
import { connect, useDispatch, useSelector } from 'react-redux'
import Doctors from '../components/AvailDoctors'
import firestore from '@react-native-firebase/firestore';
function Home(props: { navigation: any, Doctor: any }) {
    const { WIDTH, HEIGHT, FONT_SMALL, BORDER_RADIUS_CIRCULAR, FONT_ELARGE, FONT_MID, FONT_LARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE } = Numericals();
    const [docotorByStatus, setDocotorByStatus] = useState([]);
    useEffect(() => {
        setDocotorByStatus(props.Doctor.filter((value, id, arr) => value.isAvailable == true))
    }, [])

    const getRating = (no: number) => {
        let content = [];
        for (let i = 0; i < no; i++) {
            content.push(<AIcon name="star" size={ICON_SIZE - DEFAUTL_SPACE} color={Colors.STAR_COLOR} key={i} />);
        }
        return content;
    };

    return (
        <SafeAreaView >
            <StatusBar color={Colors.HOME_BCK} />
            <ScrollView >
                <View style={[styles.container, { backgroundColor: Colors.HOME_BCK, paddingTop: INLINE_GAP }]}>
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
                        <Slider doctors={props.Doctor} />
                    </View>
                    <View style={{ marginVertical: DEFAUTL_SPACE, marginHorizontal: INLINE_GAP }}>
                        <Text style={{ fontFamily: "Museo700-Regular", fontSize: FONT_LARGE }}>Find your doctors</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: INLINE_GAP }}>
                        <Pressable style={({ pressed }) => [{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('SearchResult', { type: 'Cardiologist' })}>
                            <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE + 10} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Cardiologists</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('SearchResult', { type: 'Dentist' })}>
                            <F5Icon name="teeth" color={Colors.SECONDARY} size={ICON_SIZE + 10} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Dentist</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('SearchResult', { type: 'Neurologist' })}>
                            <MIcon name="head" color={Colors.RED} size={ICON_SIZE + 10} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Neurologists</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('SearchResult', { type: 'Psychiatrist' })}>
                            <MATIcon name="psychology" color={Colors.PRIMARY} size={ICON_SIZE + 10} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Psychiatrist</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('SearchResult', { type: 'Pediatrician' })}>
                            <MATIcon name="child-care" color={Colors.ORANGE} size={ICON_SIZE + 10} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Pediatricians</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 * DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, transform: [{ scale: pressed ? 0.96 : 1 }] }]} onPress={() => props.navigation.push('SearchResult', { type: 'Gastroenterologist' })}>
                            <MIcon name="stomach" color={Colors.YELLOW} size={ICON_SIZE + 10} />
                            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Gastroenterologist</Text>
                        </Pressable>
                    </ScrollView>

                    <View style={{ marginVertical: DEFAUTL_SPACE, marginHorizontal: INLINE_GAP, }}>
                        <Text style={{ fontFamily: "Museo700-Regular", fontSize: FONT_LARGE }}>Availble Doctors</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: INLINE_GAP }}>
                        {docotorByStatus && docotorByStatus.map((value, id) =>
                            <Doctors value={value} id={id} key={id} />
                        )}
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
const mapStatetoProps = (state: any) => {
    return {
        Doctor: state.project.doctors,
    }
}
export default connect(mapStatetoProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
})
