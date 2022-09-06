import React from 'react';
import Link from 'next/link';
import styles from './MenuMobile.module.scss';

function MenuMobile() {
  return ( 
    <div className={styles['mobile-menu']}>
      <Link href="/">
          <i className={styles['icon-close']} />
      </Link>
      <ul className={`${styles['mobile-menu__list']} ${styles['mobile-menu__categories']}`}>
        <li className={styles['mobile-menu__item']}>
          <p className={styles['mobile-menu__title']}>CATEGORIES</p>
        </li>
        <li className={styles['mobile-menu__item']}>
            <Link href="/" >
              <span className={styles['mobile-menu__link']}>
                All
              </span>
              
            </Link>
          </li>

          <li className={styles['mobile-menu__item']}>
            <Link href="/" >
              <span className={styles['mobile-menu__link']}>
                Clothes
              </span>
            </Link>
          </li>

          <li className={styles['mobile-menu__item']}>
            <Link href="/" >
              <span className={styles['mobile-menu__link']}>
                Electronics
              </span>
              
            </Link>
          </li>

          <li className={styles['mobile-menu__item']}>
            <Link href="/" >
              <span className={styles['mobile-menu__link']}>
                Furniture   
              </span>
              
            </Link>
          </li>

          <li className={styles['mobile-menu__item']}>
            <Link href="/" >
              <span className={styles['mobile-menu__link']}>
                Toys
              </span>
              
            </Link>
          </li>

          <li className={styles['mobile-menu__item']}>
            <Link href="/" >
              <span className={styles['mobile-menu__link']}>
                Others
              </span>
              
            </Link>
          </li>
      </ul>
      <ul className={styles['mobile-menu__list']}>
        <li className={styles['mobile-menu__item']}>
          <Link href="/" >
            <span className={styles['mobile-menu__link']}>
              My orders
            </span>
            
          </Link>
        </li>
        <li className={styles['mobile-menu__item']}>
          <Link href="/" >
            <span className={styles['mobile-menu__link']}>
              My account
            </span>
            
          </Link>
        </li>
      </ul>
      <ul className={`${styles['mobile-menu__list']} ${styles['info']}`}>
        <li className={styles['info__item']}>
          <Link href="/" >
            <span className={styles['tinny-note']}>
              myadress@example.com
            </span>
            
          </Link>
        </li>
        <li className={styles['info__item']}>
          <Link href="/" >
            <span className={`${styles['tinny-note']} ${styles['tinny-note__link']}`}>
              Sign out
            </span>
           
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { MenuMobile };
