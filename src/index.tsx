import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from '../app.json';
import React, {FC, Suspense} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppEntry: FC = () => {
  return (
    //   <Provider store={store}>
    <SafeAreaProvider>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </SafeAreaProvider>
    //   </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppEntry);
