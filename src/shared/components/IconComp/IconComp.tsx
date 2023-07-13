import React from 'react';
import cn from 'classnames';
import styles from './iconcomp.css';

type TSizes = 12 | 14;

interface IPropIcon {
  propString?: string;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
}

export enum EIcon {
  IconComm = 'IconComm',
  IconShare = 'IconShare',
  IconHide = 'IconHide',
  IconSave = 'IconSave',
  IconComplain = 'IconComplain',
}

export function IconComp({
  propString,
  mobileSize,
  tabletSize,
  desktopSize,
}: IPropIcon) {
  const classes = cn(
    styles[`m${mobileSize}`],
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );

  let curIcon;

  switch (propString) {
    case EIcon.IconComm:
      curIcon = (
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
        >
          <path
            d="M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z"
            fill="#999999"
          />
        </svg>
      );
      break;
    case EIcon.IconShare:
      curIcon = (
        <svg
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
        >
          <path
            d="M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z"
            fill="#999999"
          />
        </svg>
      );
      break;
    case EIcon.IconHide:
      curIcon = (
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z"
            fill="#999999"
          />
        </svg>
      );
      break;
    case EIcon.IconSave:
      curIcon = (
        <svg
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
        >
          <path
            d="M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z"
            fill="#979797"
          />
        </svg>
      );
      break;
    case EIcon.IconComplain:
      curIcon = (
        <svg
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
        >
          <path
            d="M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z"
            fill="#999999"
          />
        </svg>
      );
      break;
  }

  return <div className={classes}>{curIcon}</div>;
}
