import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../constants/color';
import { scale, moderateScale } from 'react-native-size-matters';
import AIcon from 'react-native-vector-icons/AntDesign';
import { Numericals } from '../constants/numerical'
import { useNavigation } from '@react-navigation/native';
export default function header(param: { template: Function }) {
    const { COMMON_BUTTON_HEIGHT, FONT_ELARGE, FONT_MID, FONT_LARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, TEXT_INPUT_HEIGHT } = Numericals();
    const navigation = useNavigation();
    return (
        <View style={[styles.shadow, {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: INLINE_GAP,
            paddingVertical: INLINE_GAP,
            backgroundColor: Colors.WHITE
        }]}>
            <View style={{ flexDirection: 'row', flex: 0.6, justifyContent: 'space-between', backgroundColor: Colors.WHITE, alignItems: 'center' }}>
                <AIcon name="arrowleft" size={ICON_SIZE} onPress={() => navigation.goBack()} />
                <View style={{ flexDirection: 'column' }}>
                    <param.template />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: Colors.GREY.SIMPLE,
        shadowOpacity: 0.9,
        shadowRadius: 3.3,
        elevation: 1,
    },
})
