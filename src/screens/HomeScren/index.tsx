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
import type {StackScreenProps} from '@react-navigation/stack';
import Carousel from 'react-native-reanimated-carousel';
import {SCREEN_WIDTH} from 'src/app/const';
import {parallaxLayout} from 'src/components/atoms/Card/utils/parallax';
import CustomItem from 'src/components/atoms/CustomItem';
import {fruitItems} from 'src/components/atoms/Card/utils/items';
import PlayScreen from '../PlayScreen';
import Header from 'src/components/atoms/Header';

const PAGE_WIDTH = SCREEN_WIDTH / 2;

const list = [
  {id: '1', name: 'Sách nói', color: '#5B8FB9'},
  {id: '2', name: 'Ebook', color: '#B6EADA'},
  {id: '3', name: 'Tóm tắt sách', color: '#D5CEA3'},
  {id: '4', name: 'Thêm', color: '#E5B8F4'},
  {id: '5', name: 'Truyện ngủ', color: '#D8D8D8'},
  {id: '6', name: 'Thiếu nhi', color: '#6B728E'},
  {id: '7', name: 'Thiền', color: '#F582A7'},
];
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
    <>
      <SafeAreaView />
      <View style={{padding: 8}}>
        <Header title="Trang chủ" />
      </View>
      <View style={{marginTop: 16}}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {list.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                marginLeft: 12,
                marginRight: 12,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View
                style={[
                  {
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: item?.color,
                  },
                ]}
              />
              <View
                style={[
                  {
                    width: 50,
                    alignItems: 'center',
                  },
                ]}>
                <Text style={{marginTop: 12, textAlign: 'center'}}>
                  {item?.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flex: 1, marginTop: 16}}>
          <Carousel
            loop={true}
            autoPlay={false}
            style={{
              width: SCREEN_WIDTH,
              height: 240,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            width={PAGE_WIDTH}
            data={[...fruitItems, ...fruitItems]}
            renderItem={({item, index, animationValue}) => {
              return (
                <CustomItem
                  onPress={handleOnPlay(item)}
                  key={index}
                  source={item}
                  animationValue={animationValue}
                />
              );
            }}
            customAnimation={parallaxLayout(
              {
                size: PAGE_WIDTH,
                vertical: false,
              },
              {
                parallaxScrollingScale: 1,
                parallaxAdjacentItemScale: 0.5,
                parallaxScrollingOffset: 40,
              },
            )}
            scrollAnimationDuration={1200}
          />
          {/* <SButton
        onPress={() => {
          setIsAutoPlay(!isAutoPlay);
        }}
      >
        {ElementsText.AUTOPLAY}:{`${isAutoPlay}`}
      </SButton> */}
        </View>
      </View>
    </>
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
