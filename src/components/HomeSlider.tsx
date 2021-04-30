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
            title: "Online Doctor",
            descrption: 'we can search all your need here',
            url: require("../assets/images/circularProfile.png"),
            index: 1
        },
        {
            title: "Instant Help",
            descrption: 'we can search all your need here',
            url: require("../assets/images/circularProfile.png"),
            index: 2
        },
        {
            title: "Easily Accesable",
            descrption: 'Everthing nearby like cook,pg,hotels(oyo bhai)',
            url: require("../assets/images/circularProfile.png"),
            index: 3
        },
    ];

    const renderItem = ({ item, index }: { item: any, index: number }) => {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
                height: 170,
                width: WIDTH - INLINE_GAP,
                paddingHorizontal: DEFAUTL_SPACE,
                backgroundColor: Colors.PRIMARY,
                borderRadius: BORDER_RADIUS_CIRCULAR
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image
                            source={item.url}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginHorizontal: DEFAUTL_SPACE }}>
                        <Text style={{ fontSize: FONT_LARGE, color: Colors.WHITE, fontWeight: 'bold' }} >Dr. Danielle Borat</Text>
                        <Text style={{ fontSize: FONT_MID, color: Colors.WHITE }} >Pediatric specialist</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <EIcon name="location" size={ICON_SIZE} color={Colors.WHITE} />
                        <Text style={{ fontSize: scale(FONT_SMALL), color: Colors.WHITE }} >Florida,USA</Text>
                    </View>
                    <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1, backgroundColor: Colors.PRIMARY_SHADE, padding: DEFAUTL_SPACE, borderRadius: BORDER_RADIUS, width: 144, height: 49, justifyContent: 'center', alignItems: 'center' }]}>
                        <Text style={{ fontSize: scale(FONT_SMALL), color: Colors.WHITE }}>Appointment</Text>
                    </Pressable>
                </View>
            </View>
        )
    }
    return (
        <View>
            <View>
                <Carousel
                    layout={'stack'}
                    layoutCardOffset={0}
                    data={Slides}
                    renderItem={renderItem}
                    sliderWidth={400}
                    itemWidth={400}
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

