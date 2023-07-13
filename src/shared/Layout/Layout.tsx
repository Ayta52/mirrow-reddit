import React from 'react';
import styles from './layout.css';

interface ILayoutProp {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProp) {
  return <div className={styles.layout}>{children}</div>;
}
