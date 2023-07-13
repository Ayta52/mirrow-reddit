import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <>
      <div className={styles.preview}>
        <img
          className={styles.previewImg}
          src="https://cdn.dribbble.com/users/938871/screenshots/11351739/media/53d8708ec11279e2e5decd5cc6bb4d17.jpg"
          alt="Picture"
        />
      </div>
    </>
  );
}
