import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Header from '../header/header'
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import IIcon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/AntDesign'
import StatusBar from '../styles/statusBar'
import { ScrollView } from 'react-native-gesture-handler';
import FIcon from 'react-native-vector-icons/FontAwesome';

const Categories = () => {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_SMALL, FONT_LARGE, FONT_MID, SMALL_BUTTON_HEIGHT, BUTTON_HEIGHT, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const headerComponnets = () =>
        <View>
            <Text style={{ fontSize: moderateScale(FONT_MID), fontWeight: 'bold' }}>All Catagories</Text>
        </View>
    return (
        <>
            <Header template={headerComponnets} />
            <View style={[styls.container, { paddingVertical: INLINE_GAP }]}>
                <View style={[styls.categories, { marginBottom: DEFAUTL_SPACE }]}>
                    <Pressable style={({ pressed }) => [{ justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }]}>
                        <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE + 10} />
                        <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Pediatrician</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [{ justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }]}>
                        <AIcon name="eye" color={Colors.PRIMARY} size={ICON_SIZE + 10} />
                        <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Neurosurgeon</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [{ justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }]}>
                        <MIcon name="head" color={Colors.RED} size={ICON_SIZE + 10} />
                        <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Cardiologist</Text>
                    </Pressable>
                </View>
                <View style={[styls.categories, { marginBottom: DEFAUTL_SPACE }]}>
                    <Pressable style={({ pressed }) => [{ justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }]}>
                        <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE + 10} />
                        <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Heart</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [{ justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }]}>
                        <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE + 10} />
                        <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Heart</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [{ justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }]}>
                        <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE + 10} />
                        <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Heart</Text>
                    </Pressable>
                </View>
                <View style={[styls.categories, { marginBottom: DEFAUTL_SPACE }]}>
                    <Pressable style={({ pressed }) => [{ justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }]}>
                        <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE + 10} />
                        <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Heart</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [{ justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }]}>
                        <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE + 10} />
                        <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Heart</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [{ justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS }]}>
                        <FIcon name="heartbeat" color={Colors.RED} size={ICON_SIZE + 10} />
                        <Text style={{ fontSize: moderateScale(FONT_SMALL), fontWeight: 'bold', marginHorizontal: DEFAUTL_SPACE / 2 }}>Heart</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default Categories

const styls = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: Colors.HOME_BCK
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
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
