import React, { useState } from 'react';
import { generateId } from '../../../../utils/js/generateRandomIndex';
import { MenuItemsList } from './MenuItemsList';
import { Text } from '../../Text';
import { Dropdown } from '../../Dropdown';
import { IconMenu } from '../../../../icons';
import { EColor } from '../../../../constants/Color';
import styles from './menu.css';

const INITIAL_LIST = [
  { descrButton: 'Комментарии', iconButton: 'IconComm' },
  { descrButton: 'Поделиться', iconButton: 'IconComplain' },
  { descrButton: 'Скрыть', iconButton: 'IconHide', forMobile: true },
  { descrButton: 'Сохранить', iconButton: 'IconSave' },
  { descrButton: 'Пожаловаться', iconButton: 'IconShare', forMobile: true },
].map(generateId);

export function Menu() {
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className={styles.menu}>
        <Dropdown
          onVisible={handleIsVisible}
          button={
            <button className={styles.menuButton}>
              <IconMenu />
            </button>
          }
        >
          {isVisible && (
            <div className={styles.dropdown}>
              <MenuItemsList arrayButton={INITIAL_LIST} />
              <button className={styles.closeButton} onClick={handleIsVisible}>
                <Text
                  desktopSize={16}
                  tabletSize={14}
                  size={12}
                  color={EColor.grey99}
                >
                  Закрыть
                </Text>
              </button>
            </div>
          )}
        </Dropdown>
      </div>
    </>
  );
}
