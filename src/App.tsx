import type {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import TabNavigatior from './navigators/TabNavigatior';

const App: FC = () => {
  return (
    <NavigationContainer
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <TabNavigatior />
    </NavigationContainer>
  );
};

export default App;
