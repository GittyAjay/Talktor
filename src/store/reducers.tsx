import { DOCTORS } from './actions'
import { useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const initialState = {
    doctors: [],
}

firestore()
    .collection('Doctors')
    .get()
    .then(querySnapshot => {
        // console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
            const record: {} = documentSnapshot.data();
            initialState.doctors.push(record)
        });
    });

export function doctorsReducer(state = initialState, action: any) {

    switch (action.type) {
        case DOCTORS:
            [...state.doctors]
        default:
            return state
    }
}