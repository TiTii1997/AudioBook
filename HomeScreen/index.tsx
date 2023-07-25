import React from 'react';
import './HomeScreen.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';

export function HomeScreen(props: PropsWithChildren<HomeScreenProps>): ReactElement {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
}

export interface HomeScreenProps {
  //
}

HomeScreen.defaultProps = {
  //
};

HomeScreen.displayName = nameof(HomeScreen);

export default HomeScreen;
