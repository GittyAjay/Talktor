import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Doctors = () => {
    return (
        <View style={[styles.container]}>
            <Text>Search</Text>
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

export default Doctors
