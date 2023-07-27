import React from 'react';
import './TabNavigatior.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootNavigator from '../RootNavigator';
import ProfileScreen from 'src/screens/ProfileScreen';
import TabButton from 'src/components/atoms/TabButton';

const Tab = createBottomTabNavigator();

export function TabNavigatior(
  _props: PropsWithChildren<TabNavigatiorProps>,
): ReactElement {
  const TabArr = [
    {
      name: 'Home',
      icon: require('assets/icons/tabs/home.svg'),
      component: RootNavigator,
    },
    {
      name: 'Profile',
      icon: require('assets/icons/tabs/user.svg'),
      component: ProfileScreen,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 10,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => (
                <TabButton
                  onPress={props.onPress}
                  accessibilityState={props?.accessibilityState}
                  link={item?.icon}
                />
              ),
            }}
            name={item.name}
            component={item?.component}
          />
        );
      })}
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
