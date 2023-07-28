import React from 'react';
import './PlayScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {SafeAreaView, View} from 'react-native';
import Header from 'src/components/atoms/Header';
import type {StackScreenProps} from '@react-navigation/stack';

export function PlayScreen(
  props: PropsWithChildren<PlayScreenProps>,
): ReactElement {
  const {navigation} = props;

  return (
    <View style={[{padding: 16}]}>
      <SafeAreaView />
      <Header onBackPress={navigation.goBack} />
      <View />
    </View>
  );
}

export interface PlayScreenProps extends StackScreenProps<any> {
  //
}

PlayScreen.defaultProps = {
  //
};

PlayScreen.displayName = nameof(PlayScreen);

export default PlayScreen;
