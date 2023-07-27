import React from 'react';
import './HomeScren.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {Text, View} from 'react-native';

export function HomeScren(
  props: PropsWithChildren<HomeScrenProps>,
): ReactElement {
  const {children} = props;

  return (
    <>
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'red',
          },
        ]}>
        <Text>AAA</Text>
      </View>
    </>
  );
}

export interface HomeScrenProps {
  //
}

HomeScren.defaultProps = {
  //
};

HomeScren.displayName = nameof(HomeScren);

export default HomeScren;
