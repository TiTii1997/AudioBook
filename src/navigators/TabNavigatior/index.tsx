import React from 'react';
import './TabNavigatior.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import RootNavigator from '../RootNavigator';
import SvgIcon from 'src/components/atoms/SvgIcon';
import ProfileScreen from 'src/screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

export function TabNavigatior(
  _props: PropsWithChildren<TabNavigatiorProps>,
): ReactElement {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={true}
      activeColor="#F26B6C"
      inactiveColor="#7D7D7D"
      barStyle={{backgroundColor: '#ffffff'}}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#2E8A99',
          tabBarIcon: ({color}) => (
            <SvgIcon
              solid={true}
              stroke={color}
              component={require('assets/icons/tabs/home.svg')}
            />
          ),
        }}
        name="Home"
        component={RootNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <SvgIcon
              solid={true}
              stroke={color}
              component={require('assets/icons/tabs/user.svg')}
            />
          ),
        }}
        name="Settings"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export interface TabNavigatiorProps {
  //
}

TabNavigatior.defaultProps = {
  //
};

TabNavigatior.displayName = nameof(TabNavigatior);

export default TabNavigatior;
