import React from 'react';
import './RootNavigator.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import HomeScren from 'src/screens/HomeScren';
import {createStackNavigator} from '@react-navigation/stack';
import PlayScreen from 'src/screens/PlayScreen';
import TabNavigatior from '../TabNavigatior';

export function RootNavigator(
  _props: PropsWithChildren<RootNavigatorProps>,
): ReactElement {
  const {Navigator, Screen} = React.useRef(createStackNavigator()).current;

  return (
    <>
      <Navigator
        initialRouteName={TabNavigatior.displayName!}
        screenOptions={{
          headerShown: false,
        }}>
        {[TabNavigatior, HomeScren, PlayScreen].map(ScreenComponent => (
          <Screen
            key={ScreenComponent.displayName}
            component={ScreenComponent}
            name={ScreenComponent.displayName!}
          />
        ))}
      </Navigator>
    </>
  );
}

export interface RootNavigatorProps {
  //
}

RootNavigator.defaultProps = {
  //
};

RootNavigator.displayName = nameof(RootNavigator);

export default RootNavigator;
