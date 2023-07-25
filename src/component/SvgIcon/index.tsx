import PropTypes from 'prop-types';
import type {FC, PropsWithChildren, ReactElement, ReactNode} from 'react';
import React from 'react';
import type {PathProps, SvgProps} from 'react-native-svg';
import type {SvgComponent} from 'react-native-svg-types';
import nameof from 'ts-nameof.macro';

function modifyPathColor(
  child: ReactNode,
  solid: boolean,
  props: Pick<PathProps, 'fill' | 'stroke'>,
): ReactNode {
  const {fill, stroke} = props;

  if (React.isValidElement(child)) {
    return React.cloneElement(
      child,
      child?.props?.fill || child?.props?.stroke
        ? ({
            fill: solid ? fill : child.props.fill,
            stroke: solid ? stroke : child.props.stroke,
          } as any)
        : {},
      child.props?.children
        ? React.Children.toArray(child.props.children).map(
            (childNode: ReactNode) => modifyPathColor(childNode, solid, props),
          )
        : [],
    );
  }
  return null;
}

/**
 * File: SvgIcon.tsx
 * @created 2020-12-16 11:00:09
 * @author Thanh Tùng <ht@thanhtunguet.info>
 * @type {FC<PropsWithChildren<SvgIconProps>>}
 */
const SvgIcon: FC<PropsWithChildren<SvgIconProps>> = (
  props: PropsWithChildren<SvgIconProps>,
): ReactElement => {
  const {component, fill, stroke, solid, ...svgProps} = props;

  const element: ReactElement<PropsWithChildren<SvgProps>> | any =
    component.default(svgProps)!;

  const {children} = element.props;

  const childs: ReactNode[] = React.useMemo(
    () =>
      React.Children.toArray(children).map((child: ReactNode) => {
        return modifyPathColor(child, solid!, {
          fill,
          stroke,
        });
      }),
    [children, fill, stroke, solid],
  );

  return React.cloneElement(element, svgProps, childs);
};

export interface SvgIconProps extends SvgProps {
  component: {
    default: SvgComponent;
  };

  solid?: boolean;

  fill?: string | undefined;

  stroke?: string;
}

SvgIcon.defaultProps = {
  solid: false,
  fill: undefined,
  stroke: undefined,
};

if (__DEV__) {
  SvgIcon.propTypes = {
    solid: PropTypes.bool,
    fill: PropTypes.string,
    stroke: PropTypes.string,
  };
}

SvgIcon.displayName = nameof(SvgIcon);

export default React.memo(SvgIcon);
