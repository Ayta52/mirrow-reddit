import React, { useEffect, useState } from 'react';
import { UserBlock } from './UserBlock';
import axios from 'axios';
import styles from './searchblock.css';

interface ISearchBlock {
  token: string;
}

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function SearchBlock({ token }: ISearchBlock) {
  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
    if (!token || token === 'undefiend') return;
    axios
      .get('https://oauth.reddit.com/api/v1/me.json', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const userData = res.data;
        const icon = userData.icon_img.split('?')[0];
        console.log(res);
        setData({ name: userData.name, iconImg: icon });
      })
      .catch(console.log);
  }, [token]);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} userName={data.name} />
    </div>
  );
}
