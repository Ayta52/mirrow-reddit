import React from 'react';
import { Break } from '../../../Break';
import { EColor } from '../../../../../constants/Color';
import { Text } from '../../../Text';
import { IconAnon } from '../../../../../icons';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
}

export function UserBlock({ avatarSrc, userName }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=4-7VRAGFfA5_CbQq8ZOpKQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <IconAnon />
        )}
      </div>

      <div className={styles.userName}>
        <Break size={12} />
        <Text size={20} color={EColor.grey99}>
          {userName || 'Аноним'}
        </Text>
      </div>
    </a>
  );
}
