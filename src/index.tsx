import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';
import App from './App';
import {PlaybackService} from './services/PlaybackService';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
