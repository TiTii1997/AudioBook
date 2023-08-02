import React, {useCallback, useEffect} from 'react';
import './PlayScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from 'src/components/atoms/Header';
import type {StackScreenProps} from '@react-navigation/stack';
import SvgIcon from 'src/components/atoms/SvgIcon';
import TrackPlayer, {RepeatMode, useProgress} from 'react-native-track-player';
import {usePlayService} from 'src/services/use-play-service';
import Slider from '@react-native-community/slider';
import {SCREEN_HEIGHT} from 'src/app/const';

const track1 = {
  url: 'https://samples-files.com/samples/Audio/mp3/sample-file-1.mp3', // Load media from the network
  title: 'Avaritia',
  artist: 'deadmau5',
  album: 'while(1<2)',
  genre: 'Progressive House, Electro House',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: 'http://example.com/cover.png', // Load artwork from the network
  duration: 402, // Duration in seconds
};

const track2 = {
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

  const {position, duration} = useProgress();

  useEffect(() => {
    const un = navigation.addListener('focus', async () => {
      await TrackPlayer.add([track1, track2]);
    });
    return function cleanup() {
      un();
    };
  }, [navigation]);

  const [play, handlePlay, handleNext, handleRepeat, repeat, track] =
    usePlayService();

  const handleFast = useCallback(() => {
    TrackPlayer.seekTo(position + 15);
  }, [position]);

  const handleLow = useCallback(() => {
    TrackPlayer.seekTo(position - 15);
  }, [position]);

  return (
    <>
      <SafeAreaView />
      <ImageBackground
        source={require('assets/images/background/playbg.png')}
        resizeMode="cover"
        style={[
          {
            width: '100%',
            height: SCREEN_HEIGHT / 4,
            position: 'absolute',
            zIndex: -1,
          },
        ]}
      />
      <View style={[{padding: 16, height: SCREEN_HEIGHT}]}>
        <Header
          titleStyle={[{color: 'white'}]}
          onBackPress={navigation.goBack}
          isLightMode={true}
          title={track?.title}
        />
        <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
          <Image
            source={require('assets/images/file/image.png')}
            resizeMode="contain"
            style={[
              {
                width: '100%',
                top: 60,
                height: 273,
              },
            ]}
          />
          <Text style={[{marginTop: 80}]}>{track?.name}</Text>
        </View>
        <View
          style={[
            {
              alignItems: 'center',
              left: -8,
              position: 'absolute',
              bottom: SCREEN_HEIGHT / 6,
              padding: 16,
            },
          ]}>
          <Slider
            style={[
              {
                height: 40,
                width: '90%',
                marginTop: 25,
                paddingLeft: 32,
                paddingRight: 32,
                flexDirection: 'row',
              },
            ]}
            value={position}
            minimumValue={0}
            maximumValue={duration}
            thumbTintColor="#FFD479"
            minimumTrackTintColor="#FFD479"
            maximumTrackTintColor="#FFFFFF"
            onSlidingComplete={TrackPlayer.seekTo}
          />
          <View
            style={[
              {
                flexDirection: 'row',
                marginTop: 16,
                justifyContent: 'space-between',
                width: '100%',
                paddingLeft: 16,
                paddingRight: 16,
              },
            ]}>
            <TouchableOpacity
              onPress={handleNext(false)}
              style={[{justifyContent: 'center'}]}>
              <SvgIcon
                component={require('assets/icons/plays/next-down.svg')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLow}
              style={[{justifyContent: 'center'}]}>
              <SvgIcon component={require('assets/icons/plays/speed-up.svg')} />
            </TouchableOpacity>
            {!play ? (
              <TouchableOpacity onPress={handlePlay}>
                <SvgIcon component={require('assets/icons/plays/play.svg')} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handlePlay}>
                <SvgIcon component={require('assets/icons/plays/stop.svg')} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={handleFast}
              style={[{justifyContent: 'center'}]}>
              <SvgIcon
                component={require('assets/icons/plays/speed-down.svg')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleNext(true)}
              style={[{justifyContent: 'center'}]}>
              <SvgIcon component={require('assets/icons/plays/next-up.svg')} />
            </TouchableOpacity>
          </View>
          <View style={[{marginTop: 32}]}>
            <TouchableOpacity onPress={handleRepeat}>
              <SvgIcon
                solid={repeat === RepeatMode.Track}
                stroke={'#F26B6C'}
                component={require('assets/icons/plays/repeat.svg')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
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
