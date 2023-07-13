import React, { ReactNode } from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: ReactNode;
  children: ReactNode;
  onVisible?: () => void;
}

export function Dropdown({ button, children, onVisible }: IDropdownProps) {
  return (
    <>
      <div className={styles.container}>
        <div onClick={onVisible}>{button}</div>
        <div className={styles.listContainer}>
          <div className={styles.list}>{children}</div>
        </div>
      </div>
    </>
  );
}
