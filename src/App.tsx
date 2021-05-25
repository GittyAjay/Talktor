import 'react-native-gesture-handler';
import * as React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import { AppNavigator } from './navigation/app'
import { Provider } from 'react-redux';
import { store } from './store/store';
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}


