import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Header from '../header/header'
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import IIcon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import AIcon from 'react-native-vector-icons/AntDesign'
import StatusBar from '../styles/statusBar'
import { ScrollView } from 'react-native-gesture-handler';

export default function Notification(props: { navigation: any }) {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_MID, FONT_LARGE, SMALL_BUTTON_HEIGHT, BUTTON_HEIGHT, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const HeaderComponnets = () =>
        <View style={[styls.shadow, {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.WHITE,
            paddingVertical: INLINE_GAP
        }]}>
            <Text style={[styls.fontstyle, { fontSize: FONT_LARGE, fontWeight: 'bold' }]}>Notifications</Text>
        </View>
    return (
        <>
            <StatusBar color={Colors.WHITE} />
            <HeaderComponnets />
            <ScrollView style={{ flex: 1 }}>
                <View style={[styls.container]}>
                    <View style={[styls.today, { marginTop: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, paddingHorizontal: INLINE_GAP, paddingVertical: DEFAUTL_SPACE }]}>
                        <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>Today</Text>
                        <View style={[styls.todayElements, { paddingVertical: DEFAUTL_SPACE }]}>
                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingVertical: DEFAUTL_SPACE }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS, marginRight: DEFAUTL_SPACE }}>
                                        <IIcon name="md-notifications-outline" size={ICON_SIZE} style={{ transform: [{ rotateZ: '20deg' }] }} color={Colors.WHITE} />
                                    </View>
                                    <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>Remaind For Seriel</Text>
                                </View>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </Text>
                            </View>
                        </View>
                        <View style={{ height: 0.5, backgroundColor: Colors.GREY.LIGHT, marginHorizontal: -INLINE_GAP }}>
                        </View>
                        <View style={[styls.todayElements, { paddingVertical: DEFAUTL_SPACE }]}>
                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingVertical: DEFAUTL_SPACE }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS, marginRight: DEFAUTL_SPACE }}>
                                        <IIcon name="md-notifications-outline" size={ICON_SIZE} style={{ transform: [{ rotateZ: '20deg' }] }} color={Colors.WHITE} />
                                    </View>
                                    <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>Remaind For Seriel</Text>
                                </View>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styls.today, { marginTop: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, paddingHorizontal: INLINE_GAP, paddingVertical: DEFAUTL_SPACE }]}>
                        <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>Yesterday</Text>
                        <View style={[styls.todayElements, { paddingVertical: DEFAUTL_SPACE }]}>
                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingVertical: DEFAUTL_SPACE }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS, marginRight: DEFAUTL_SPACE }}>
                                        <IIcon name="md-notifications-outline" size={ICON_SIZE} style={{ transform: [{ rotateZ: '20deg' }] }} color={Colors.WHITE} />
                                    </View>
                                    <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>Remaind For Seriel</Text>
                                </View>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </Text>
                            </View>
                        </View>
                        <View style={{ height: 0.5, backgroundColor: Colors.GREY.LIGHT, marginHorizontal: -INLINE_GAP }}>
                        </View>
                        <View style={[styls.todayElements, { paddingVertical: DEFAUTL_SPACE }]}>
                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingVertical: DEFAUTL_SPACE }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS, marginRight: DEFAUTL_SPACE }}>
                                        <IIcon name="md-notifications-outline" size={ICON_SIZE} style={{ transform: [{ rotateZ: '20deg' }] }} color={Colors.WHITE} />
                                    </View>
                                    <Text style={[styls.fontstyle, { fontWeight: 'bold', fontSize: FONT_MID }]}>Remaind For Seriel</Text>
                                </View>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
const styls = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: Colors.HOME_BCK
    },
    today: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    todayElements: {
        flexDirection: 'column',
    },
    fontstyle: {

    },
    shadow: {
        shadowColor: Colors.GREY.SIMPLE,
        shadowOpacity: 0.9,
        shadowRadius: 3.3,
        elevation: 1,
    },
})
