import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function wishList() {
    return (
        <View style={[styles.container]}>
            <Text>wishlist</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textstyle: {
        fontSize: 30,
        color: 'red'
    }
})
