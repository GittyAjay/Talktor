import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Pressable, Keyboard } from 'react-native'
import StatusBar from '../styles/statusBar'
import { Colors } from '../constants/color';
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical';
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MATIcon from 'react-native-vector-icons/MaterialIcons';
import EIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';

const Search = (props: { navigation: any }) => {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_MID, FONT_LARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, [keyboardStatus]);
    const _keyboardDidShow = () => setKeyboardStatus(true);
    const _keyboardDidHide = () => setKeyboardStatus(false);
    return (
        <>
            {!keyboardStatus && <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: INLINE_GAP,
                paddingVertical: INLINE_GAP,
                backgroundColor: Colors.WHITE
            }}>
                <View style={{ flexDirection: 'row', flex: 0.6, justifyContent: 'space-between', backgroundColor: Colors.WHITE, alignItems: 'center' }}>
                    <AIcon name="arrowleft" size={ICON_SIZE} onPress={() => props.navigation.pop()} />
                    <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold' }}>Search Here</Text>
                </View>
            </View>}

            <SafeAreaView style={[styls.container]}>
                <StatusBar color={!keyboardStatus ? Colors.WHITE : Colors.HOME_BCK} />

                <View style={[styls.main, { paddingHorizontal: INLINE_GAP, paddingVertical: INLINE_GAP }]}>
                    <View style={[styls.Heading]}>
                        <Text style={[styls.fontStyle, { fontSize: FONT_LARGE }]}>Search Your</Text>
                        <Text style={[styls.fontStyle, { fontSize: FONT_ELARGE, fontWeight: 'bold' }]}>Specialist</Text>
                    </View>
                    <View style={[styls.inputBox, { paddingVertical: INLINE_GAP }]}>
                        <View style={{ backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingVertical: TEXT_INPUT_HEIGHT, paddingHorizontal: DEFAUTL_SPACE, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }} >
                            <TextInput placeholder="Select Area" />
                            <IIcon name="location" size={ICON_SIZE} color={Colors.GREY.LIGHT} />
                        </View>
                        <View style={{ backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingVertical: TEXT_INPUT_HEIGHT, paddingHorizontal: DEFAUTL_SPACE, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }} >
                            <TextInput placeholder="Doctor,specialist" />
                            <MIcon name="stethoscope" size={ICON_SIZE} color={Colors.GREY.LIGHT} />
                        </View>
                        <View style={{ backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingVertical: TEXT_INPUT_HEIGHT, paddingHorizontal: DEFAUTL_SPACE, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                            <TextInput placeholder="Select Date" />
                            <MATIcon name="date-range" size={ICON_SIZE} color={Colors.GREY.LIGHT} />
                        </View>
                    </View>
                    <Pressable style={({ pressed }) => [{ paddingVertical: COMMON_BUTTON_HEIGHT, backgroundColor: Colors.PRIMARY, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', transform: [{ scale: pressed ? 0.95 : 1 }] }]}>
                        <Text style={[styls.fontStyle, { fontSize: FONT_MID, color: Colors.WHITE, fontWeight: 'bold' }]}>Search</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </>
    )
}
const styls = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: Colors.HOME_BCK,
    },
    main: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    Heading: {
        flexDirection: 'column'
    },
    inputBox: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    fontStyle: {

    }
})

export default Search;
