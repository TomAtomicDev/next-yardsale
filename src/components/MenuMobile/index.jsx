import React from 'react';
import styles from './MenuMobile.module.scss';

function MenuMobile(props) {
  return (
    <div className={styles['mobile-menu']}>
      <a href="/">
        <i className={styles["icon-close"]} />
      </a>
      <ul className={`${styles["mobile-menu__list"]} ${styles["mobile-menu__categories"]}`}>
        <li className={styles["mobile-menu__item"]}>
          <p className={styles["mobile-menu__title"]}>CATEGORIES</p>
        </li>
        <li className={styles["mobile-menu__item"]}>
          <a className={styles["mobile-menu__link"]} href="/">All</a>
        </li>
        <li className={styles["mobile-menu__item"]}>
          <a className={styles["mobile-menu__link"]} href="/">Clothes</a>
        </li>
        <li className={styles["mobile-menu__item"]}>
          <a className={styles["mobile-menu__link"]} href="/">Electronics</a>
        </li>
        <li className={styles["mobile-menu__item"]}>
          <a className={styles["mobile-menu__link"]} href="/">Furnitures</a>
        </li>
        <li className={styles["mobile-menu__item"]}>
          <a className={styles["mobile-menu__link"]} href="/">Toys</a>
        </li>
        <li className={styles["mobile-menu__item"]}>
          <a className={styles["mobile-menu__link"]} href="/">Others</a>
        </li>
      </ul>
      <ul className={styles["mobile-menu__list"]}>
        <li className={styles["mobile-menu__item"]}>
          <a href className={styles["mobile-menu__link"]}>My orders</a>
        </li>
        <li className={styles["mobile-menu__item"]}>
          <a href className={styles["mobile-menu__link"]}>My account</a>
        </li>
      </ul>
      <ul className={`${styles["mobile-menu__list"]} ${styles["info"]}`}>
        <li className={styles["info__item"]}>
          <a className={styles["tinny-note"]} href="/">myadress@example.com</a>
        </li>
        <li className={styles["info__item"]}>
          <a className={`${styles["tinny-note"]} ${styles["tinny-note__link"]}`} href="/">Sign out</a>
        </li>
      </ul>
    </div>

  );
}

export {MenuMobile} ;