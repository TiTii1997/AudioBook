import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';

export function usePlayService(): [
  boolean,
  () => void,
  (isNext: boolean) => () => void,
  () => void,
  RepeatMode | undefined,
] {
  const navigation = useNavigation();

  const [play, isPlay] = useState<boolean>(false);

  const [repeat, setRepeat] = useState<RepeatMode>();

  const handlePlay = useCallback(() => {
    isPlay(!play);
    if (play) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }, [play]);

  useEffect(() => {
    const unsub = navigation.addListener('focus', async () => {
      setRepeat(await TrackPlayer.getRepeatMode());
    });
    return function cleanup() {
      unsub();
    };
  }, [navigation]);

  const handleNext = useCallback(
    (isNext: boolean) => () => {
      if (isNext) {
        TrackPlayer.skipToNext();
      } else {
        TrackPlayer.skipToPrevious();
      }
    },
    [],
  );

  const handleRepeat = useCallback(() => {
    if (repeat === RepeatMode.Track) {
      setRepeat(RepeatMode.Off);
      TrackPlayer.setRepeatMode(RepeatMode.Off);
    } else {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeat(RepeatMode.Track);
    }
  }, [repeat]);
  return [play, handlePlay, handleNext, handleRepeat, repeat];
}
