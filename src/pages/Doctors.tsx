import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View, Image, Alert } from 'react-native'
import { Numericals } from '../constants/numerical'
import { Colors } from '../constants/color';
import { ScrollView } from 'react-native-gesture-handler';
import EIcon from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigationState } from '@react-navigation/native';
import { connect, useDispatch, useSelector } from 'react-redux'
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import AIcon from 'react-native-vector-icons/AntDesign'


function Doctors(props: { navigation: any, Doctors: any, route: any }) {
    const { INLINE_GAP, DEFAUTL_SPACE, BORDER_RADIUS, FONT_MID, FONT_SMALL, ICON_SIZE } = Numericals();
    const [docotorByType, setDocotorByType] = useState([]);
    useEffect(() => {
        props.navigation.addListener('focus', () => {
            setDocotorByType(props.Doctors.filter((value, id, arr) => value.type == props.route.name))
        });
        console.log(docotorByType.length);
    }, [])
    const getRating = (no: number) => {
        let content = [];
        for (let i = 0; i < no; i++) {
            content.push(<AIcon name="star" size={ICON_SIZE - DEFAUTL_SPACE} color={Colors.STAR_COLOR} key={i} />);
        }
        return content;
    };
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={[styles.container, { marginBottom: DEFAUTL_SPACE, flexWrap: 'wrap' }]}>
                {docotorByType && docotorByType.map((value, id) => {
                    return (
                        <Pressable key={id} style={({ pressed }) => [styles.card, styles.shadow, { width: 190, height: 180, backgroundColor: Colors.WHITE, borderRadius: BORDER_RADIUS, padding: DEFAUTL_SPACE, transform: [{ scale: pressed ? 0.96 : 1 }], marginTop: DEFAUTL_SPACE, marginLeft: DEFAUTL_SPACE }]} onPress={() => props.navigation.push('DoctorIntro')}>
                            <View>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>{value.name}</Text>
                                <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, }}>{value.specialization}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: DEFAUTL_SPACE }}>
                                    {getRating(value.rating)}
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Experience</Text>
                                    <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>{value.experience + 'year'}</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: FONT_SMALL, color: Colors.GREY.SIMPLE }}>Patients</Text>
                                    <Text style={{ fontSize: FONT_SMALL, color: Colors.BLACK, fontWeight: 'bold' }}>{value.review < 1000 ? value.review : value.review / 1000 + 'k'}</Text>
                                </View>
                            </View>
                            <LinearGradient
                                start={{ x: 1, y: 0.9 }}
                                end={{ x: 0.8, y: 0 }}
                                colors={[Colors.WHITE, Colors.WHITE]}
                                style={{ height: 150, justifyContent: 'center' }}
                            >
                                <Image source={{ uri: value.url }} style={{ width: 70, height: 140 }} />
                            </LinearGradient>
                        </Pressable>
                    )
                })}
            </View>
        </ScrollView>
    )
}
const mapStatetoProps = (state: any) => {
    return {
        Doctors: state.project.doctors,
    }
}
export default connect(mapStatetoProps)(Doctors);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.HOME_BCK
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: Colors.GREY.SIMPLE,
        shadowOpacity: 0.9,
        shadowRadius: 3.3,
        elevation: 1,
    },
    textstyle: {
        fontSize: 30,
        color: 'red'
    }
})
