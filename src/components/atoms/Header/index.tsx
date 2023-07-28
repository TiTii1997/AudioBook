import React from 'react';
import './Header.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {Text, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../SvgIcon';

export function Header(props: PropsWithChildren<HeaderProps>): ReactElement {
  const {icon, title, onBackPress} = props;

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      ]}>
      <TouchableOpacity
        onPress={onBackPress}
        style={{width: 40, height: 40, justifyContent: 'center'}}>
        <SvgIcon component={require('assets/icons/systems/back.svg')} />
      </TouchableOpacity>
      <View>
        <Text style={[{fontSize: 24, color: '#F26B6C', fontWeight: 500}]}>
          {title}
        </Text>
      </View>
      {icon ? icon : <View style={{width: 40, height: 40}} />}
    </View>
  );
}

export interface HeaderProps {
  icon?: any;

  title?: string;

  onBackPress?: () => void;
}

Header.defaultProps = {
  title: 'Tiêu Đề',
};

Header.displayName = nameof(Header);

export default Header;
