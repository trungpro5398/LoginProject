/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginScreen from './screen/login/LoginScreen';
import DatabindingScreen from './screen/databinding/DatabindingScreen';
import EmojiSreen from './screen/emoji/EmojiSreen';
import DemoProps from './screen/demoprops/DemoProps';
import ZaloHomeSreen from './screen/zalo/ZaloHomeSreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ZaloHomeSreen);
// AppRegistry.registerComponent(appName, () => DatabindingScreen);
