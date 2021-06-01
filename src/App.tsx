import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import { AppNavigator } from './navigation/app'
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
)

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}


