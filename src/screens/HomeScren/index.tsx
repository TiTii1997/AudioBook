import React, {useCallback} from 'react';
import './HomeScren.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from 'src/components/atoms/Header';
import listData from '../../sample_data/listData.json';
import type {StackScreenProps} from '@react-navigation/stack';
import PlayScreen from '../PlayScreen';

export function HomeScren(
  props: PropsWithChildren<HomeScrenProps>,
): ReactElement {
  const {navigation} = props;

  const handleOnPlay = useCallback(
    (item: any) => () => {
      navigation.navigate(PlayScreen.displayName, item);
    },
    [navigation],
  );

  return (
    <View style={[{padding: 16}]}>
      <SafeAreaView />
      <Header />
      <ScrollView style={[{marginTop: 16}]}>
        {listData.map((item, index) => (
          <TouchableOpacity
            onPress={handleOnPlay(item)}
            style={[{width: 120, height: 120}]}
            key={index}>
            <Text>{item?.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export interface HomeScrenProps extends StackScreenProps<any> {
  //
}

HomeScren.defaultProps = {
  //
};

HomeScren.displayName = nameof(HomeScren);

export default HomeScren;
