import React from 'react';
import './CustomItem.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {
  View,
  Image,
  type ImageSourcePropType,
  type Animated,
  TouchableOpacity,
} from 'react-native';
import {useAnimatedStyle, interpolate} from 'react-native-reanimated';

export function CustomItem(
  props: PropsWithChildren<CustomItemProps>,
): ReactElement {
  const {source, animationValue, onPress} = props;
  const maskStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animationValue.value, [-1, 0, 1], [1, 0, 1]);

    return {
      opacity,
    };
  }, [animationValue]);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={source}
        resizeMode={'contain'}
        style={{width: '100%', height: '100%'}}
      />
      {/* <BlurView
        intensity={50}
        pointerEvents="none"
        style={[StyleSheet.absoluteFill, maskStyle]}
      /> */}
    </TouchableOpacity>
  );
}

export interface CustomItemProps {
  source: ImageSourcePropType;
  animationValue: Animated.SharedValue<number>;
  onPress: any;
}

CustomItem.defaultProps = {
  //
};

CustomItem.displayName = nameof(CustomItem);

export default CustomItem;
