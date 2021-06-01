const initialState = {
    doctors: [],
    appointments: [],
}

export default function doctorsReducer(state = initialState, action: any) {

    switch (action.type) {
        case 'DOCTOR_FETCH':
            return {
                ...state,
                doctors: [...state.doctors, action.payload]
            }
        case 'APPOINTMENTS_FETCH':
            return {
                ...state,
                appointments: [...state.appointments, action.payload]
            }
        case 'CLEAR_DEFAULT':
            return {
                ...state,
                appointments: [],
            }
        default:
            return state
    }
}