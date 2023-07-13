import React from 'react';
import styles from './title.css';

export function Title() {
  return (
    <>
      <h2 className={styles.title}>
        <a className={styles.postLink} href="#post-url">
          Реплицированные с зарубежных источников возможности{' '}
        </a>
      </h2>
    </>
  );
}
