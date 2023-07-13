import React from 'react';
import { Text } from '../../../Text';
import { EColor } from '../../../../../constants/Color';
import cn from 'classnames';
import styles from './menuitemslist.css';
import { generateRandomString } from '../../../../../utils/js/generateRandomIndex';
import { IconComp } from '../../../IconComp';

interface IButtonType {
  descrButton: string;
  id: string;
  forMobile?: boolean;
  iconButton?: string;
}

interface IArrayProps {
  arrayButton: IButtonType[];
}

export function MenuItemsList({ arrayButton }: IArrayProps) {
  return (
    <>
      <ul className={styles.menuItemsList}>
        {arrayButton.map((item) => {
          return (
            <div key={generateRandomString()}>
              <li
                className={cn(styles.menuItem, {
                  [styles.itemMobile]: item.forMobile,
                })}
                key={item.id}
              >
                <IconComp
                  propString={item.iconButton}
                  desktopSize={14}
                  tabletSize={14}
                  mobileSize={12}
                />
                <Text
                  desktopSize={16}
                  tabletSize={14}
                  size={12}
                  color={EColor.grey99}
                >
                  {item.descrButton}
                </Text>
              </li>
              <div className={styles.divider} key={generateRandomString()} />
            </div>
          );
        })}
      </ul>
    </>
  );
}
