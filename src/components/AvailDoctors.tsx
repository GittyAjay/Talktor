import React from 'react';
import { View, Pressable, Text, Image } from 'react-native'
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import { useNavigation } from '@react-navigation/native';
import AIcon from 'react-native-vector-icons/AntDesign';

// import { } from ''

export default function AvailDoctor({ value, id }) {
    const { WIDTH, HEIGHT, FONT_SMALL, BORDER_RADIUS_CIRCULAR, FONT_ELARGE, FONT_MID, FONT_LARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE } = Numericals();
    const navigation = useNavigation();

    const getRating = (no: number) => {
        let content = [];
        for (let i = 0; i < no; i++) {
            content.push(<AIcon name="star" size={ICON_SIZE - DEFAUTL_SPACE} color={Colors.STAR_COLOR} key={i} />);
        }
        return content;
    };
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}
            key={id}>
            <Pressable
                style={({ pressed }) => [{
                    width: 290,
                    height: 220,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: DEFAUTL_SPACE,
                    backgroundColor: Colors.WHITE,
                    paddingHorizontal: DEFAUTL_SPACE,
                    marginVertical: DEFAUTL_SPACE,
                    borderRadius: BORDER_RADIUS,
                    transform: [{ scale: pressed ? 0.96 : 1 }]
                }]}
                onPress={() => navigation.navigate('DoctorIntro', { item: value })}
            >
                <View style={{ flex: 1, justifyContent: 'space-between', padding: DEFAUTL_SPACE }}>
                    <Text style={{ fontSize: FONT_MID, color: Colors.BLACK, }}>{value.name}</Text>
                    <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, }}>{value.specialization}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: DEFAUTL_SPACE }}>
                        {getRating(value.rating)}
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Experience</Text>
                        <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>{value.experience} year</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Patients</Text>
                        <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>{value.patients < 1000 ? value.patients : value.patients / 1000 + 'k'}</Text>
                    </View>
                </View>
                <View>
                    <Image style={{ width: 130, height: 130 }} source={{ uri: value.url }} />
                </View>
            </Pressable>
        </View>
    )
}