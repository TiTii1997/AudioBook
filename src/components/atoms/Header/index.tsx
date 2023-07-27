import React from 'react';
import './Header.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';

export function Header(props: PropsWithChildren<HeaderProps>): ReactElement {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
}

export interface HeaderProps {
  //
}

Header.defaultProps = {
  //
};

Header.displayName = nameof(Header);

export default Header;
