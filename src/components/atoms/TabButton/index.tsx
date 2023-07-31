import React, {useEffect, useRef} from 'react';
import './TabButton.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import SvgIcon from '../SvgIcon';

export function TabButton(
  props: PropsWithChildren<TabButtonProps>,
): ReactElement {
  const {link, accessibilityState, onPress} = props;
  const viewRef = useRef(null);

  const focused = accessibilityState.selected;

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 0.5, rotate: '0deg'},
        1: {scale: 1.5, rotate: '360deg'},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.5, rotate: '360deg'},
        1: {scale: 1, rotate: '0deg'},
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={10}
      style={{
        marginTop: 20,
        flex: 1,
      }}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Animatable.View
          style={[
            focused && {
              backgroundColor: '#F17373',
              width: 40,
              height: 40,
              marginBottom: 20,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <SvgIcon component={link} />
        </Animatable.View>
      </Animatable.View>
    </TouchableOpacity>
  );
}

export interface TabButtonProps {
  link: any;

  accessibilityState: any;

  onPress: any;
}

TabButton.defaultProps = {
  //
};

TabButton.displayName = nameof(TabButton);

export default TabButton;
