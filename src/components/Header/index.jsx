import React, { useState, useContext } from 'react';
import Link from 'next/link';
;import Image from 'next/image';
import {MenuMobile} from 'components/MenuMobile';
import {AppContext} from 'context/AppContext';
import {MyOrder} from 'containers/MyOrder';
import iconMenu from '@icons/icon_menu.svg';
import iconLogo from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';
import styles from './Header.module.scss';

function Header () {

  const { state: {cart}} = useContext(AppContext);
  
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle);
  }

  return (
    <nav className={styles.nav}>
      <Image className={styles['nav__menu-icon']} src={iconMenu} alt="Menu" />
      <div className={styles["nav-left"]}>
        <Link href="/">
          <Image src={iconLogo} alt="Logo" className={styles["nav__logo"]} />
        </Link>
        
        <ul className={`${styles["nav-list"]} ${styles["nav-left__list"]}`}>

          <li className={styles["nav-list__item"]}>
            <a href="/" className={styles["nav-list__link"]}>All</a>
          </li>

          <li className={styles["nav-list__item"]}>
            <a href="/" className={styles["nav-list__link"]}>Clothes</a>
          </li>

          <li className={styles["nav-list__item"]}>
            <a href="/" className={styles["nav-list__link"]}>Electronics</a>
          </li>

          <li className={styles["nav-list__item"]}>
            <a href="/" className={styles["nav-list__link"]}>Furniture</a>
          </li>

          <li className={styles["nav-list__item"]}>
            <a href="/" className={styles["nav-list__link"]}>Toys</a>
          </li>

          <li className={styles["nav-list__item"]}>
            <a href="/" className={styles["nav-list__link"]}>Others</a>
          </li>
        </ul>
      </div>
      <div className={styles["nav-right"]}>
        <ul className={styles["nav-list"]}>
          <li 
            className={styles["nav-right__email"]}
            onClick={handleToggle}>
              myadress@example.com
            </li>
          <li 
            className={styles["nav-right__shopping"]} 
            onClick={()=>setToggleOrders(prevToggle => !prevToggle)}>
            
              <Image className={styles["nav-right__shopping-icon"]} src={iconShoppingCart} alt="Shopping cart" />
              {cart.length >0 && <div>{cart.length}</div>}
            
          </li>
        </ul>
      </div>
      {toggle && <MenuMobile />}
      {toggleOrders && <MyOrder />}
    </nav>

  );
}

export { Header };