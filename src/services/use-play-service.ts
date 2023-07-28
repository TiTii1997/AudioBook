import {useCallback, useState} from 'react';
import TrackPlayer from 'react-native-track-player';

export function usePlayService(): [boolean, () => void] {
  const [play, isPlay] = useState<boolean>(false);
  const handlePlay = useCallback(() => {
    isPlay(!play);
    if (play) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }, [play]);
  return [play, handlePlay];
}
