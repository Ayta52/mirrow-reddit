import React, { useState } from 'react';
import { Controls } from '../Controls';
import { Menu } from '../Menu';
import { Preview } from '../Preview';
import { TextContent } from '../TextСontent';
import styles from './card.css';

export function Card() {
  return (
    <li className={styles.card}>
      <TextContent />
      <Preview />
      <Controls />
      <Menu />
    </li>
  );
}
