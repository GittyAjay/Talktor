import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import StatusBar from '../styles/statusBar'
import { Colors } from '../constants/color';
import { scale, moderateScale } from 'react-native-size-matters';
import { Numericals } from '../constants/numerical';
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
const Search = () => {
    const { WIDTH, HEIGHT, FONT_SMALL, BORDER_RADIUS_CIRCULAR, FONT_ELARGE, FONT_MID, FONT_LARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE } = Numericals();

    return (
        <SafeAreaView style={[styls.container, { marginHorizontal: INLINE_GAP }]}>
            <StatusBar color={Colors.HOME_BCK} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <AIcon name="arrowleft" size={ICON_SIZE} />
                <Text style={{ fontFamily: "Museo700-Regular", fontSize: moderateScale(FONT_MID) }}>Search Here</Text>
            </View>
        </SafeAreaView>
    )
}
const styls = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})

export default Search
