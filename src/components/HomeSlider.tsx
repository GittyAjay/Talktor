import { Colors } from '../constants/color'
import React, { useEffect, useState } from 'react';
import StatusBar from '../styles/statusBar'
import LottieView from 'lottie-react-native'
import { Numericals } from '../constants/numerical';
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/EvilIcons';
import { View, Text, StyleSheet, Pressable, Animated, Image } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

function Slider({ doctors }) {
    const { ICON_SIZE, BUTTON_HEIGHT, DEFAUTL_SPACE, FONT_SMALL, FONT_LARGE, FONT_MID, HEIGHT, WIDTH, BORDER_RADIUS_CIRCULAR, INLINE_GAP, BORDER_RADIUS, BORDER_WIDTH } = Numericals();
    const getDoctors = useDispatch();
    const navigation = useNavigation();
    useEffect(() => {
        getDoctors({ type: 'DOCTORS' })
    }, [])

    const renderItem = ({ item, index }: { item: any, index: number }) => {
        return (
            <Pressable style={({ pressed }) => [{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: 170,
                backgroundColor: Colors.PRIMARY,
                borderRadius: BORDER_RADIUS,
                transform: [{ scale: pressed ? 0.96 : 1 }]
            }]}
                onPress={() => navigation.navigate('DoctorIntro', { item })
                }
            >

                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', marginBottom: 25, paddingLeft: 40 }}>
                    <Text style={{ fontSize: FONT_MID, color: Colors.WHITE, width: 200 }}>{item.title}</Text>
                    <View style={{ borderLeftColor: Colors.CYAN, borderLeftWidth: 2, paddingHorizontal: DEFAUTL_SPACE, marginTop: INLINE_GAP, borderStyle: 'solid' }}>
                        <Text style={{ fontSize: FONT_SMALL, color: Colors.WHITE, width: 200 }}>{item.name}</Text>
                        <Text style={{ fontSize: FONT_SMALL, color: Colors.WHITE, width: 200 }}>{item.specialization}</Text>
                        <Text style={{ fontSize: FONT_SMALL, color: Colors.WHITE, width: 200 }}>{item.clinic}</Text>
                    </View>
                </View>
                <View >
                    <Image
                        style={{ width: 100, height: 150 }}
                        source={{
                            uri:
                                item.url
                        }} />
                </View>
            </Pressable>
        )
    }
    return (
        <View>
            <View>
                <Carousel
                    layout={'default'}
                    data={doctors}
                    firstItem={1}
                    renderItem={renderItem}
                    sliderWidth={430}
                    itemWidth={345}
                />
            </View>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    defaultTxt: {
        fontFamily: 'Museo700-Regular'
    },
})



