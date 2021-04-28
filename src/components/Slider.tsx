import { Colors } from '../constants/color'
import React, { useState, useRef } from 'react';
import StatusBar from '../styles/statusBar'
import LottieView from 'lottie-react-native'
import { Numericals } from '../constants/numerical';
import AIcon from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Slider = () => {

    const { ICON_SIZE, BUTTON_HEIGHT, DEFAUTL_SPACE, FONT_SMALL, FONT_LARGE, FONT_MID, HEIGHT, WIDTH, BORDER_RADIUS_CIRCULAR, INLINE_GAP, BORDER_RADIUS, BORDER_WIDTH } = Numericals();
    const Slides = [
        {
            title: "Online Doctor",
            descrption: 'we can search all your need here',
            url: require("../assets/images/welcome0.json"),
            index: 1
        },
        {
            title: "Instant Help",
            descrption: 'we can search all your need here',
            url: require("../assets/images/welcome1.json"),
            index: 2
        },
        {
            title: "Easily Accesable",
            descrption: 'Everthing nearby like cook,pg,hotels(oyo bhai)',
            url: require("../assets/images/welcome2.json"),
            index: 3
        },
        {
            title: "Order Medicine",
            descrption: 'Book Pg in minute',
            url: require("../assets/images/welcome3.json"),
            index: 4
        },
        {
            title: "Find more",
            descrption: 'We have more things,explore here',
            url: require("../assets/images/welcome4.json"),
            index: 5
        },
    ];

    const renderItem = ({ item, index }: { item: any, index: number }) => {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: Colors.PRIMARY
            }}>
                <View style={{ width: 200, height: 200 }}>
                    <LottieView
                        source={item.url}
                        autoPlay
                        loop
                    />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.defaultTxt, { fontSize: FONT_LARGE, color: Colors.WHITE }]}>{item.title}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 20 }}>
                        <View style={{ width: 10, height: 10, borderRadius: BORDER_RADIUS, backgroundColor: item.index == 1 ? Colors.WHITE : Colors.GREY.SIMPLE }}></View>
                        <View style={{ width: 10, height: 10, borderRadius: BORDER_RADIUS, backgroundColor: item.index == 2 ? Colors.WHITE : Colors.GREY.SIMPLE, marginHorizontal: DEFAUTL_SPACE / 2 }}></View>
                        <View style={{ width: 10, height: 10, borderRadius: BORDER_RADIUS, backgroundColor: item.index == 3 ? Colors.WHITE : Colors.GREY.SIMPLE }}></View>
                        <View style={{ width: 10, height: 10, borderRadius: BORDER_RADIUS, backgroundColor: item.index == 4 ? Colors.WHITE : Colors.GREY.SIMPLE, marginHorizontal: DEFAUTL_SPACE / 2 }}></View>
                        <View style={{ width: 10, height: 10, borderRadius: BORDER_RADIUS, backgroundColor: item.index == 5 ? Colors.WHITE : Colors.GREY.SIMPLE }}></View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <View>
                <Carousel
                    layout={'stack'}
                    data={Slides}
                    sliderWidth={200}
                    autoplay={true}
                    enableMomentum={false}
                    lockScrollWhileSnapping={true}
                    layoutCardOffset={0}
                    itemWidth={200}
                    autoplayInterval={3000}
                    loop={true}
                    renderItem={renderItem} />
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

