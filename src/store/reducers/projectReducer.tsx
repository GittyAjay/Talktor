const initialState = {
    doctors: [],
}

export default function doctorsReducer(state = initialState, action: any) {

    switch (action.type) {
        case 'DOCTOR_FETCH':
            return {
                ...state,
                doctors: [...state.doctors, action.payload]
            }
        default:
            return state
    }
}