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
import Header from '../header/header'


const Search = (props: { navigation: any }) => {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_MID, FONT_LARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    const headerComponnets = () => <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold' }}>Search Here</Text>

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };

    }, [keyboardStatus]);
    const _keyboardDidShow = () => setKeyboardStatus(true);
    const _keyboardDidHide = () => setKeyboardStatus(false);
    return (
        <>
            {!keyboardStatus && <Header template={headerComponnets} />}

            <SafeAreaView style={[styls.container]}>
                <StatusBar color={!keyboardStatus ? Colors.WHITE : Colors.HOME_BCK} />

                <View style={[styls.main, { paddingHorizontal: INLINE_GAP, paddingVertical: INLINE_GAP }]}>
                    <View style={[styls.Heading]}>
                        <Text style={[styls.fontStyle, { fontSize: FONT_LARGE }]}>Search Your</Text>
                        <Text style={[styls.fontStyle, { fontSize: FONT_ELARGE, fontWeight: 'bold' }]}>Specialist</Text>
                    </View>
                    <View style={[styls.inputBox, { paddingVertical: INLINE_GAP }]}>
                        <View style={{ backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingVertical: TEXT_INPUT_HEIGHT, paddingHorizontal: DEFAUTL_SPACE, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }} >
                            <TextInput placeholder="Select Area" placeholderTextColor={Colors.GREY.LIGHT} style={{ color: Colors.BLACK, flex: 1 }} />
                            <IIcon name="location" size={ICON_SIZE} color={Colors.GREY.LIGHT} />
                        </View>
                        <View style={{ backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingVertical: TEXT_INPUT_HEIGHT, paddingHorizontal: DEFAUTL_SPACE, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }} >
                            <TextInput placeholder="Doctor,specialist" placeholderTextColor={Colors.GREY.LIGHT} style={{ color: Colors.BLACK, flex: 1 }} />
                            <MIcon name="stethoscope" size={ICON_SIZE} color={Colors.GREY.LIGHT} />
                        </View>
                        <View style={{ backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, paddingVertical: TEXT_INPUT_HEIGHT, paddingHorizontal: DEFAUTL_SPACE, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                            <TextInput placeholder="Select Date" placeholderTextColor={Colors.GREY.LIGHT} style={{ color: Colors.BLACK, flex: 1 }} />
                            <MATIcon name="date-range" size={ICON_SIZE} color={Colors.GREY.LIGHT} />
                        </View>
                    </View>
                    <Pressable style={({ pressed }) => [{ paddingVertical: COMMON_BUTTON_HEIGHT, backgroundColor: Colors.PRIMARY, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', transform: [{ scale: pressed ? 0.95 : 1 }] }]} onPress={() => props.navigation.push('SearchResult', { type: 'Cardiologist' })}>
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
