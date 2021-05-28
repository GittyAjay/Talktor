const initialState = {
    doctors: [],
    doctorsByCategory: [],
    doctorsByStatus: [],
}

export default function doctorsReducer(state = initialState, action: any) {

    switch (action.type) {
        case 'DOCTOR_FETCH':
            return {
                ...state,
                doctors: [...state.doctors, action.payload]
            }
        case 'DOCTOR_BY_CATEGORIES_FETCH':
            // console.log("Store", action.payload);
            return {
                ...state,
                doctorsByCategory: [...state.doctorsByCategory, action.payload]
            }
        case 'DOCTOR_BY_STATUS_FETCH':
            // console.log("Store", action.payload);
            return {
                ...state,
                doctorsByStatus: [...state.doctorsByStatus, action.payload]
            }
        case 'CLEAR_DEFAULT':
            return {
                ...state,
                doctorsByCategory: [],
                doctorsByStatus: []
            }

        default:
            return state
    }
}