import React from 'react';
import styles from './content.css';

interface IContentProp {
  children?: React.ReactNode;
}

export function Content({ children }: IContentProp) {
  return <main className={styles.content}>{children}</main>;
}
