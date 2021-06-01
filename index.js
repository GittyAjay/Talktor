import { AppRegistry } from 'react-native';
import App from './src/App';
import { LogBox } from 'react-native'
import { name as appName } from './app.json';
LogBox.ignoreLogs(['Reanimated 2']);
AppRegistry.registerComponent(appName, () => App);
