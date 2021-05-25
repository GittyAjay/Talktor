import { createStore } from 'redux'
import { doctorsReducer } from './reducers'
export let store = createStore(doctorsReducer)
