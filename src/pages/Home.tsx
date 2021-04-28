import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import StatusBar from '../styles/statusBar'
import { Image } from 'react-native'
import AIcon from 'react-native-vector-icons/AntDesign';
export default function Home() {
    const { WIDTH, HEIGHT, FONT_ELARGE, ICON_SIZE } = Numericals();

    console.log(HEIGHT);

    return (
        <View style={[styles.container]}>
            <StatusBar color={Colors.TIRTARY} />
            <View style={[styles.heropage, { height: HEIGHT * 0.7, backgroundColor: Colors.TIRTARY }]}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Image source={require('../assets/images/heroImg.png')} style={{ resizeMode: 'contain' }} />
                    <Text style={[styles.textstyle, { color: Colors.WHITE, fontSize: FONT_ELARGE }]}>Made Possible by We</Text>
                </View>
            </View>
            <View style={[styles.search, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: WIDTH - 10, marginLeft: 5, marginRight: 5, backgroundColor: Colors.WHITE }]}>
                <AIcon name="search1" color={Colors.TIRTARY} size={ICON_SIZE - 5} />
                <TextInput placeholder="What are you searching?" style={{ color: Colors.TIRTARY }} />
            </View>
            <View style={{ flexDirection: 'column', }}>
                <Text style={[styles.textstyle, { color: Colors.BLACK, fontSize: FONT_ELARGE }]}>Explore Nearby</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative'
    },
    heropage: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    search: {
        position: 'absolute',
        flexDirection: 'row',
        top: 0,
        right: 0,
        left: 0,
        borderRadius: 100
    },
    textstyle: {
        fontFamily: 'Comfortaa-Bold'
    }
})
