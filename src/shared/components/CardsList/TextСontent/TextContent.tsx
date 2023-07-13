import React from 'react';
import { UserLink } from './UserLink';
import { Title } from './Title';
import styles from './textcontent.css';

export function TextContent() {
  return (
    <>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <UserLink />
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span> 4 часа
            назад
          </span>
        </div>
        <Title />
      </div>
    </>
  );
}
