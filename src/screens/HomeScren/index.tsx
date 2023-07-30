import React, {useCallback} from 'react';
import './HomeScren.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {
  Image,
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
      <Text
        style={[
          {marginTop: 20, color: '#4F4F4F', fontSize: 18, fontWeight: 600},
        ]}>
        Nhac hot
      </Text>
      <ScrollView
        style={[{marginTop: 16}]}
        contentContainerStyle={[{flexDirection: 'row'}]}>
        {listData.map((item, index) => (
          <TouchableOpacity
            onPress={handleOnPlay(item)}
            style={[{width: 100, height: 120, marginBottom: 40}]}
            key={index}>
            <Image
              resizeMode="contain"
              style={[{width: 100, height: 120}]}
              source={require('assets/images/file/image.png')}
            />
            <Text style={[{marginTop: 8, marginLeft: 14}]}>{item?.title}</Text>
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
