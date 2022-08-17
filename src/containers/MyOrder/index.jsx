import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {OrderItem} from 'components/OrderItem';
import { AppContext } from 'context/AppContext';
import styles from './MyOrder.module.scss';

import iconArrow from '@icons/flechita.svg';

function MyOrder (props) {

  const { state: {cart}} = useContext(AppContext);

  const totalPrice = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles["my-order"]}>
      <div className={styles["my-order-container"]}>
        <div className={styles["my-order__titleContainer"]}>
          <Image src={iconArrow} alt="arrow" className={styles["arrow"]}/>
          <h1 className="{styles[order-title]}">My order</h1>
        </div>

        <div className={styles["order-products"]}>
          {cart.map( (product, index) => (
            <OrderItem product={product} key={`order-item-${index}`}  keyIndex={index} />
          ))}
          
        </div>

        <div className={styles["order-summary"]}>
          <p className={styles["order-summary__info"]}>
            <span className={styles["order-summary__date"]}>Total</span>
            <span className={styles["order-summary__count"]}>{cart.length} articles</span>
          </p>
          <p className={styles["order-summary__totalmoney"]}>${totalPrice()}</p>
          
        </div>
        <Link href="/checkout">
        <button className={`${styles["button"]} ${styles["button--primary"]}`}>
          Checkout
        </button>
        </Link>
        
        
      </div>
    </aside>

  );
}

export {MyOrder} ;

