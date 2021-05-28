import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Header from '../header/header'
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import IIcon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import AIcon from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'


const DoctorIntro = (props: { navigation: any, route: { params: { item: {} } } }) => {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, FONT_LARGE, SMALL_BUTTON_HEIGHT, BUTTON_HEIGHT, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    let doctorDetails = props.route.params.item;
    console.log(doctorDetails);

    const headerComponnets = () =>
        <View>
            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold' }}>{doctorDetails.name}</Text>
        </View>
    const getRating = () => {
        let content = [];
        for (let i = 0; i < doctorDetails.rating; i++) {
            content.push(<AIcon name="star" size={ICON_SIZE} color={Colors.STAR_COLOR} key={i} />);
        }
        return content;
    };
    return (
        <>
            <Header template={headerComponnets} />
            <View style={[style.container]}>
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[Colors.WHITE, Colors.HOME_BCK]} style={[style.heroImg, { backgroundColor: Colors.WHITE }]}>
                    <Image style={{ width: 200, height: 200 }} source={{ uri: doctorDetails.url }} />
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
                </LinearGradient>
                <View style={[style.main, { paddingHorizontal: INLINE_GAP, paddingTop: INLINE_GAP }]}>
                    <View style={[style.aboutHeader, {}]}>
                        <Text style={[style.fontStyle, { fontSize: FONT_MID }]}>{doctorDetails.specialization}</Text>
                        <Text style={[style.fontStyle, { fontSize: FONT_SMALL }]}>{doctorDetails.clinic}</Text>
                        <View style={{ flexDirection: 'row', paddingVertical: DEFAUTL_SPACE, marginBottom: INLINE_GAP }}>
                            {getRating()}
                        </View>
                        <View style={{ flexDirection: 'column', marginBottom: INLINE_GAP }}>
                            <Text style={[style.fontStyle, { fontSize: FONT_MID }]}>About {doctorDetails.name}</Text>
                            <Text style={[style.fontStyle, { fontSize: FONT_SMALL }]}>{doctorDetails.about}</Text>
                        </View>
                    </View>

                    <View style={[style.aboutComponent, { paddingHorizontal: INLINE_GAP }]}>
                        <View style={[style.aboutElement]}>
                            <Text style={[style.fontStyle, { color: Colors.GREY.SIMPLE }]}>Patient</Text>
                            <Text style={[style.fontStyle, { fontSize: FONT_MID, color: Colors.BLACK }]}>{doctorDetails.patients < 1000 ? doctorDetails.patients : doctorDetails.patients / 1000 + "k"}</Text>
                        </View>
                        <View style={[style.aboutElement]}>
                            <Text style={[style.fontStyle, { color: Colors.GREY.SIMPLE }]}>Experience</Text>
                            <Text style={[style.fontStyle, { fontSize: FONT_MID, color: Colors.BLACK }]}>{doctorDetails.experience} year</Text>
                        </View>
                        <View style={[style.aboutElement]}>
                            <Text style={[style.fontStyle, { color: Colors.GREY.SIMPLE }]}>Review</Text>
                            <Text style={[style.fontStyle, { fontSize: FONT_MID, color: Colors.BLACK }]}>{doctorDetails.review < 1000 ? doctorDetails.review : doctorDetails.review / 1000 + "k"}</Text>
                        </View>
                    </View>
                    <Pressable style={({ pressed }) => [{ paddingVertical: COMMON_BUTTON_HEIGHT, marginVertical: INLINE_GAP, backgroundColor: Colors.PRIMARY, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', transform: [{ scale: pressed ? 0.95 : 1 }] }]} onPress={() => props.navigation.push('AppointmentReq')}>
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

export default DoctorIntro
