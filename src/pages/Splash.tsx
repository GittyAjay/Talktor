import React, { useRef, useEffect } from 'react'
import { Animated, Easing, View, Text, Image, StyleSheet, Button } from 'react-native'
import { Colors } from '../constants/color';
import { Numericals } from '../constants/numerical';
import StatusBar from '../styles/statusBar';
import { scale, moderateScale } from 'react-native-size-matters';

export default function Splash(props: { navigation: { push: Function } }) {
    const { FONT_MID, FONT_LARGE, FONT_ELARGE, FONT_SMALL } = Numericals();
    setTimeout(() => {
        props.navigation.push('Dashboard');
    }, 1000);
    return (
        <View style={[styles.container, { backgroundColor: Colors.PRIMARY }]}>
            <StatusBar color={Colors.PRIMARY} />
            <Text style={[styles.txtProp, { fontSize: scale(FONT_ELARGE), color: Colors.WHITE, fontFamily: 'Museo700-Regular', marginVertical: moderateScale(3) }]}>Talktor</Text>
            <Text style={[styles.txtProp, { fontSize: scale(FONT_SMALL), color: Colors.WHITE, width: 266, marginVertical: moderateScale(3) }]}>India's top doctors to guide you to better health every day</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtProp: {
        textAlign: 'center',
    }
})