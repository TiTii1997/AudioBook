import React from 'react';
import './ProfileScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {View} from 'react-native';

export function ProfileScreen(
  _props: PropsWithChildren<ProfileScreenProps>,
): ReactElement {
  return (
    <>
      <View style={[{flex: 1, backgroundColor: '#E5E5E5'}]}></View>
    </>
  );
}

export interface ProfileScreenProps {
  //
}

ProfileScreen.defaultProps = {
  //
};

ProfileScreen.displayName = nameof(ProfileScreen);

export default ProfileScreen;
