import {useEffect, type FC, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import TabNavigatior from './navigators/TabNavigatior';
import TrackPlayer from 'react-native-track-player';

const App: FC = () => {
  const handleSetupPlayer = useCallback(async () => {
    await TrackPlayer.setupPlayer();
  }, []);

  useEffect(() => {
    handleSetupPlayer();
  }, [handleSetupPlayer]);

  return (
    <NavigationContainer
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <TabNavigatior />
    </NavigationContainer>
  );
};

export default App;
