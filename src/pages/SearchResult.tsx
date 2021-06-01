import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import { useBackHandler } from '@react-native-community/hooks'
import Header from '../header/header'
import { Colors } from '../constants/color';
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EIcon from 'react-native-vector-icons/Entypo'
import EVIcon from 'react-native-vector-icons/EvilIcons'
import firestore from '@react-native-firebase/firestore';
import { connect, useDispatch, useSelector } from 'react-redux'
import Doctors from '../components/AvailDoctors'

const SearchResult = (props: { navigation: any, route: { params: any }, Doctor: any }) => {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, FONT_LARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const [type, setType] = useState(props.route.params.type)
    const [docotorByType, setDocotorByType] = useState([]);
    const [docotorByStatus, setDocotorByStatus] = useState([]);

    useEffect(() => {
        setDocotorByType(props.Doctor.filter((value, id, arr) => value.specialization == props.route.params.type))
        setDocotorByStatus(props.Doctor.filter((value, id, arr) => value.isAvailable == true))
    }, []);

    const headerComponnets = () =>
        <View>
            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold' }}>Your location</Text>
        </View>

    return (
        <>
            <Header template={headerComponnets} />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                <View style={[styles.container, { paddingHorizontal: INLINE_GAP }]}>
                    <View style={[styles.heading, { paddingVertical: INLINE_GAP }]}>
                        <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>All Cardiologist</Text>
                        <TouchableOpacity>
                            <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.main]}>
                        {docotorByType && docotorByType.map((value: any, id: any) => {
                            return (
                                <Pressable key={id} style={({ pressed }) => [styles.mainElement, styles.shadow, { height: 100, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingHorizontal: INLINE_GAP, marginBottom: DEFAUTL_SPACE, transform: [{ scale: pressed ? 0.97 : 1 }] }]} onPress={() => props.navigation.push('DoctorIntro', { item: value })}>
                                    <View style={[styles.imageCard, { borderRadius: BORDER_RADIUS, backgroundColor: Colors.CYAN }]}>
                                        <Image source={{ uri: value.url }} style={{ width: 50, height: 70 }} />
                                    </View>
                                    <View style={[styles.content, { paddingHorizontal: INLINE_GAP }]}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                            <Text>{value.name}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                                <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                                <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                                <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                                <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                            <Text>{value.specialization}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <EVIcon name="clock" size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                                                <Text>12:00pm</Text>
                                                <Text style={{ paddingHorizontal: DEFAUTL_SPACE / 2 }}>-</Text>
                                                <Text>4:00pm</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <EIcon name="location-pin" size={ICON_SIZE} />
                                                <Text>location</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Pressable>
                            )
                        })}
                        <View style={{ flexDirection: 'column' }}>

                            <View style={{ marginVertical: DEFAUTL_SPACE }}>
                                <Text style={{ fontSize: FONT_LARGE }}>Availble Doctors</Text>
                            </View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {docotorByStatus && docotorByStatus.map((value, id) =>
                                    <Doctors value={value} id={id} key={id} />
                                )}
                            </ScrollView>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </>
    )
}
const mapStatetoProps = (state: any) => {
    return {
        Doctor: state.project.doctors,
    }
}

export default connect(mapStatetoProps)(SearchResult);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {

    },
    main: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    mainElement: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imageCard: {
        width: 50,
        height: 50,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    shadow: {
        shadowColor: Colors.GREY.SIMPLE,
        shadowOpacity: 0.9,
        shadowRadius: 3.3,
        elevation: 1,
    },

})
