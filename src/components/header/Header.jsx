import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Header_logo}>Instagram</div>
      <input type="text" placeholder="&#128269;Search" />
      <div className={styles.Header_wrapper}></div>
    </div>
  );
}

export default Header;