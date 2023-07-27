import React from 'react';
import './HomeScren.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';

export function HomeScren(props: PropsWithChildren<HomeScrenProps>): ReactElement {
  const {children} = props;

  return (
    <>
      {children}
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
