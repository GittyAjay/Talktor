import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Header from '../header/header'
import { Colors } from '../constants/color';
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EIcon from 'react-native-vector-icons/Entypo'
import EVIcon from 'react-native-vector-icons/EvilIcons'

const SearchResult = () => {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, FONT_LARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
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
                        <View style={[styles.mainElement, styles.shadow, { height: 100, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingHorizontal: INLINE_GAP, marginBottom: DEFAUTL_SPACE }]}>
                            <View style={[styles.imageCard, { borderRadius: BORDER_RADIUS, backgroundColor: Colors.CYAN }]}>
                                <Image source={require('../assets/images/doctor.png')} style={{ width: 50, height: 70 }} />
                            </View>
                            <View style={[styles.content, { paddingHorizontal: INLINE_GAP }]}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <Text>Dr. Sarena Gomez</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <Text>Cardiologist(MBBS)</Text>
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
                                        <Text>New City Clinic</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.mainElement, styles.shadow, { height: 100, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingHorizontal: INLINE_GAP, marginBottom: DEFAUTL_SPACE }]}>
                            <View style={[styles.imageCard, { borderRadius: BORDER_RADIUS, backgroundColor: Colors.CYAN }]}>
                                <Image source={require('../assets/images/doctor.png')} style={{ width: 50, height: 70 }} />
                            </View>
                            <View style={[styles.content, { paddingHorizontal: INLINE_GAP }]}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <Text>Dr. Sarena Gomez</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <Text>Cardiologist(MBBS)</Text>
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
                                        <Text>New City Clinic</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.mainElement, styles.shadow, { height: 100, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingHorizontal: INLINE_GAP, marginBottom: DEFAUTL_SPACE }]}>
                            <View style={[styles.imageCard, { borderRadius: BORDER_RADIUS, backgroundColor: Colors.CYAN }]}>
                                <Image source={require('../assets/images/doctor.png')} style={{ width: 50, height: 70 }} />
                            </View>
                            <View style={[styles.content, { paddingHorizontal: INLINE_GAP }]}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <Text>Dr. Sarena Gomez</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <Text>Cardiologist(MBBS)</Text>
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
                                        <Text>New City Clinic</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.mainElement, styles.shadow, { height: 100, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingHorizontal: INLINE_GAP, marginBottom: DEFAUTL_SPACE }]}>
                            <View style={[styles.imageCard, { borderRadius: BORDER_RADIUS, backgroundColor: Colors.CYAN }]}>
                                <Image source={require('../assets/images/doctor.png')} style={{ width: 50, height: 70 }} />
                            </View>
                            <View style={[styles.content, { paddingHorizontal: INLINE_GAP }]}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <Text>Dr. Sarena Gomez</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                        <EIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <Text>Cardiologist(MBBS)</Text>
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
                                        <Text>New City Clinic</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column' }}>


                            <View style={{ marginVertical: DEFAUTL_SPACE }}>
                                <Text style={{ fontSize: FONT_LARGE }}>Availble Doctors</Text>
                            </View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                                    <View style={{
                                        width: 290,
                                        height: 220,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginRight: DEFAUTL_SPACE,
                                        backgroundColor: Colors.WHITE,
                                        paddingHorizontal: DEFAUTL_SPACE,
                                        marginVertical: DEFAUTL_SPACE,
                                        borderRadius: BORDER_RADIUS,
                                    }}>
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
                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                                    <View style={{
                                        width: 290,
                                        height: 220,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginRight: DEFAUTL_SPACE,
                                        backgroundColor: Colors.WHITE,
                                        paddingHorizontal: DEFAUTL_SPACE,
                                        marginVertical: DEFAUTL_SPACE,
                                        borderRadius: BORDER_RADIUS,
                                    }}>
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
                                    </View>
                                </View>
                            </ScrollView>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default SearchResult

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
