import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src="https://cdn.dribbble.com/userupload/6045565/file/original-eb30c1bd543cfa6fa93ee5beabf9a9fd.jpg?compress=1&resize=752x"
          alt="avatar"
        />
        <a href="#user-url" className={styles.username}>
          Дмитрий Гришин
        </a>
      </div>
    </>
  );
}
