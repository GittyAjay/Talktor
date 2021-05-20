import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Header from '../header/header'
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import IIcon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import AIcon from 'react-native-vector-icons/AntDesign'


const Doctor = () => {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, FONT_LARGE, SMALL_BUTTON_HEIGHT, BUTTON_HEIGHT, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const headerComponnets = () =>
        <View>
            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold' }}>Dr Ripa Duwadi</Text>
        </View>
    return (
        <>
            <Header template={headerComponnets} />
            <View style={[style.container]}>
                <View style={[style.heroImg, { backgroundColor: Colors.WHITE }]}>
                    <Image source={require('../assets/images/doctor3.png')} />
                    <View style={[style.ActionButtons]}>
                        <Pressable style={({ pressed }) => [{ paddingVertical: SMALL_BUTTON_HEIGHT, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', transform: [{ scale: pressed ? 0.95 : 1 }], flexDirection: 'row', paddingHorizontal: DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE }]} >
                            <IIcon name="call" color={Colors.WHITE} size={ICON_SIZE} />
                            <Text style={[style.fontStyle, { fontSize: FONT_SMALL, color: Colors.WHITE, paddingHorizontal: 4, fontWeight: 'bold' }]}>Call</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ paddingVertical: SMALL_BUTTON_HEIGHT, backgroundColor: Colors.SECONDARY, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', transform: [{ scale: pressed ? 0.95 : 1 }], flexDirection: 'row', paddingHorizontal: DEFAUTL_SPACE, marginRight: DEFAUTL_SPACE }]} >
                            <MIcon name="videocam" color={Colors.WHITE} size={ICON_SIZE} />
                            <Text style={[style.fontStyle, { fontSize: FONT_SMALL, color: Colors.WHITE, paddingHorizontal: 4, fontWeight: 'bold' }]}>Video Call</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ paddingVertical: SMALL_BUTTON_HEIGHT, backgroundColor: Colors.ORANGE, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', transform: [{ scale: pressed ? 0.95 : 1 }], flexDirection: 'row', paddingHorizontal: DEFAUTL_SPACE }]} >
                            <IIcon name="chatbubble-ellipses" color={Colors.WHITE} size={ICON_SIZE} />
                            <Text style={[style.fontStyle, { fontSize: FONT_SMALL, color: Colors.WHITE, paddingHorizontal: 4, fontWeight: 'bold' }]}>Message</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={[style.main, { paddingHorizontal: INLINE_GAP, paddingTop: INLINE_GAP }]}>
                    <View style={[style.aboutHeader, {}]}>
                        <Text style={[style.fontStyle, { fontSize: FONT_MID }]}>Medicine and Heart Specialist</Text>
                        <Text style={[style.fontStyle, { fontSize: FONT_SMALL }]}>Good health clininc,MBBS,HCPS</Text>
                        <View style={{ flexDirection: 'row', paddingVertical: DEFAUTL_SPACE, marginBottom: INLINE_GAP }}>
                            <AIcon name="star" size={ICON_SIZE - 2} color={Colors.STAR_COLOR} style={{ paddingRight: DEFAUTL_SPACE }} />
                            <AIcon name="star" size={ICON_SIZE - 2} color={Colors.STAR_COLOR} style={{ paddingRight: DEFAUTL_SPACE }} />
                            <AIcon name="star" size={ICON_SIZE - 2} color={Colors.STAR_COLOR} style={{ paddingRight: DEFAUTL_SPACE }} />
                            <AIcon name="star" size={ICON_SIZE - 2} color={Colors.STAR_COLOR} style={{ paddingRight: DEFAUTL_SPACE }} />
                            <AIcon name="star" size={ICON_SIZE - 2} color={Colors.STAR_COLOR} style={{ paddingRight: DEFAUTL_SPACE }} />
                        </View>
                        <View style={{ flexDirection: 'column', marginBottom: INLINE_GAP }}>
                            <Text style={[style.fontStyle, { fontSize: FONT_MID }]}>About Ripa</Text>
                            <Text style={[style.fontStyle, { fontSize: FONT_SMALL }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble</Text>
                        </View>
                    </View>

                    <View style={[style.aboutComponent, { paddingHorizontal: INLINE_GAP }]}>
                        <View style={[style.aboutElement]}>
                            <Text style={[style.fontStyle, { color: Colors.GREY.SIMPLE }]}>Patient</Text>
                            <Text style={[style.fontStyle, { fontSize: FONT_MID, color: Colors.BLACK }]}>1.08k</Text>
                        </View>
                        <View style={[style.aboutElement]}>
                            <Text style={[style.fontStyle, { color: Colors.GREY.SIMPLE }]}>Experience</Text>
                            <Text style={[style.fontStyle, { fontSize: FONT_MID, color: Colors.BLACK }]}>8 Year</Text>
                        </View>
                        <View style={[style.aboutElement]}>
                            <Text style={[style.fontStyle, { color: Colors.GREY.SIMPLE }]}>Review</Text>
                            <Text style={[style.fontStyle, { fontSize: FONT_MID, color: Colors.BLACK }]}>2.05k</Text>
                        </View>
                    </View>
                    <Pressable style={({ pressed }) => [{ paddingVertical: COMMON_BUTTON_HEIGHT, marginVertical: INLINE_GAP, backgroundColor: Colors.PRIMARY, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', transform: [{ scale: pressed ? 0.95 : 1 }] }]} >
                        <Text style={[style.fontStyle, { fontSize: FONT_MID, color: Colors.WHITE, fontWeight: 'bold' }]}>Book an Appointment</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: Colors.HOME_BCK
    },
    heroImg: {
        flexDirection: 'column',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    ActionButtons: {
        position: 'absolute',
        bottom: -10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    aboutHeader: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    aboutComponent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    aboutElement: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontStyle: {

    }
})

export default Doctor
