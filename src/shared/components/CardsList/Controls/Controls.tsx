import React from 'react';
import { KarmaCounter } from './KarmaCounter';
import { CommentsButton } from './CommentsButton';
import { ShareButton } from './ShareButton';
import { SaveButton } from './SaveButton';
import styles from './controls.css';

export function Controls() {
  return (
    <>
      <div className={styles.controls}>
        <KarmaCounter />
        <CommentsButton />
        <div className={styles.actions}>
          <ShareButton />
          <SaveButton />
        </div>
      </div>
    </>
  );
}
