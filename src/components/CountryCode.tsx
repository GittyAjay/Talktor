import React from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
export default function CountryCode() {
    const { WIDTH, INLINE_GAP, HEIGHT } = Numericals();
    return (
        <View style={[{ paddingTop: 20, width: WIDTH - 40, height: HEIGHT - 15 }, styles.container]}>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch' }}>
                <FlatList data={[
                    { key: 'india' },
                    { key: 'Bangladesh' },
                    { key: 'Bhutan' },
                    { key: 'Pakistan' },
                    { key: 'Srilanka' },
                    { key: 'China' },
                    { key: 'Russia' },
                    { key: 'Iraq' },
                    { key: 'Afganistan' },
                    { key: 'America' },
                    { key: 'Indiana' },
                    { key: 'Australia' },
                    { key: 'South Afrika' },
                    { key: 'Vietnam' },
                    { key: 'Izrail' },
                    { key: 'k' },
                    { key: 'l' },
                    { key: 'n' },
                    { key: 'o' },
                    { key: 'p' },
                    { key: 'q' },
                    { key: 'r' },
                ]}
                    renderItem={
                        ({ item }) => <Pressable style={({ pressed }) => [{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }, { backgroundColor: pressed ? Colors.IVORY : "white" },]}>
                            <Text style={{ padding: 10 }}>{item.key}</Text>
                        </Pressable>}
                    scrollEnabled={true}

                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 10,
    }
})
