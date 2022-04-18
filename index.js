/**
 * @format
 */

import { AppRegistry } from 'react-native';
import LoginScreen from './screen/login/LoginScreen';
import DatabindingScreen from './screen/databinding/DatabindingScreen';
import EmojiSreen from './screen/emoji/EmojiSreen';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => EmojiSreen);
// AppRegistry.registerComponent(appName, () => DatabindingScreen);


