import { DOCTORS, AUTH } from '../actions'
import { useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const initialState = {

}

export function authReducer(state = initialState, action: any) {
    return state;
}