import React, {useEffect} from 'react';
import './PlayScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Header from 'src/components/atoms/Header';
import type {StackScreenProps} from '@react-navigation/stack';
import SvgIcon from 'src/components/atoms/SvgIcon';
import TrackPlayer from 'react-native-track-player';
import {usePlayService} from 'src/services/use-play-service';

const track1 = {
  url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Load media from the network
  title: 'Avaritia',
  artist: 'deadmau5',
  album: 'while(1<2)',
  genre: 'Progressive House, Electro House',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: 'http://example.com/cover.png', // Load artwork from the network
  duration: 402, // Duration in seconds
};
export function PlayScreen(
  props: PropsWithChildren<PlayScreenProps>,
): ReactElement {
  const {navigation} = props;

  useEffect(() => {
    const un = navigation.addListener('focus', async () => {
      await TrackPlayer.add([track1]);
    });
    return function cleanup() {
      un();
    };
  }, [navigation]);

  const [play, handlePlay] = usePlayService();

  return (
    <View style={[{padding: 16}]}>
      <SafeAreaView />
      <Header onBackPress={navigation.goBack} />
      <View
        style={[
          {justifyContent: 'center', alignItems: 'center', marginTop: 50},
        ]}>
        {!play ? (
          <TouchableOpacity onPress={handlePlay}>
            <SvgIcon component={require('assets/icons/plays/play.svg')} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handlePlay}>
            <SvgIcon component={require('assets/icons/plays/stop.svg')} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export interface PlayScreenProps extends StackScreenProps<any> {
  //
}

PlayScreen.defaultProps = {
  //
};

PlayScreen.displayName = nameof(PlayScreen);

export default PlayScreen;
