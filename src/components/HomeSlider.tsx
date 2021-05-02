import { Colors } from '../constants/color'
import React, { useState, useRef } from 'react';
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


const Slider = () => {

    const { ICON_SIZE, BUTTON_HEIGHT, DEFAUTL_SPACE, FONT_SMALL, FONT_LARGE, FONT_MID, HEIGHT, WIDTH, BORDER_RADIUS_CIRCULAR, INLINE_GAP, BORDER_RADIUS, BORDER_WIDTH } = Numericals();
    const Slides = [
        {
            title: "Looking for your desire Specialist doctor",
            doctorName: 'Albert Khan',
            specialization: 'Heart Dieases',
            clinic: 'Good Health Clinic',
            url: require("../assets/images/doctor.png"),
            index: 1
        },
        {
            title: "Instant Help",
            doctorName: 'Sanroz dubey',
            specialization: 'Sex problem',
            clinic: 'Kamdev Health Clinic',
            url: require("../assets/images/doctor1.png"),
            index: 2
        },
        {
            title: "Easily Accesable",
            doctorName: 'Tokyo kappor',
            clinic: '24*7 helth checkup',
            specialization: 'Covid problem',
            url: require("../assets/images/doctor2.png"),
            index: 3
        },
    ];

    const renderItem = ({ item, index }: { item: any, index: number }) => {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: 170,
                backgroundColor: Colors.PRIMARY,
                borderRadius: BORDER_RADIUS,
            }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', marginBottom: 25, paddingLeft: 40 }}>
                    <Text style={{ fontSize: FONT_MID, color: Colors.WHITE, width: 200 }}>{item.title}</Text>
                    <View style={{ borderLeftColor: Colors.CYAN, borderLeftWidth: 2, paddingHorizontal: DEFAUTL_SPACE, marginTop: INLINE_GAP, borderStyle: 'solid' }}>
                        <Text style={{ fontSize: FONT_SMALL, color: Colors.WHITE, width: 200 }}>{item.doctorName}</Text>
                        <Text style={{ fontSize: FONT_SMALL, color: Colors.WHITE, width: 200 }}>{item.specialization}</Text>
                        <Text style={{ fontSize: FONT_SMALL, color: Colors.WHITE, width: 200 }}>{item.clinic}</Text>
                    </View>
                </View>
                <View >
                    <Image source={item.url} resizeMode="contain" />
                </View>
            </View>
        )
    }
    return (
        <View>
            <View>
                <Carousel
                    layout={'default'}
                    data={Slides}
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

