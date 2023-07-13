import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './text.css';
import { EColor } from '../../../constants/Color';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
    color = EColor.black,
    bold = false,
  } = props;
  const classes = cn(
    styles[`s${size}`],
    { [styles.bold]: bold },
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color]
  );
  return (
    <>
      <As className={classes}>{children}</As>
    </>
  );
}
