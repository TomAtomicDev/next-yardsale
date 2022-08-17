import React, { useState, useContext } from 'react';
import Image from 'next/image';
import {AppContext} from 'context/AppContext';
import iconAddCart from '@icons/bt_add_to_cart.svg'; 
import styles from './ProductItem.module.scss';

function ProductItem({product}) {
  const { addToCart } = useContext(AppContext);

  const handleClick = (toAddProduct) => {
    addToCart(toAddProduct);
  }
  return (
    <div className={styles["product-item"]}>
      <Image 
        loader={() => product.images[0]}
        src={product.images[0]} 
        alt={product.title} 
        className={styles["product-item__img"]} 
        width="100%" 
        height="100%" 
        layout="responsive"/>
      <div className={styles["item-info"]}>
        <div className={styles["item-text"]}>
          <p className={styles["item-text__price"]}>${product.price}</p>
          <p className={styles["item-text__name"]}>{product.title}</p>
        </div>
        <figure 
          onClick={() => handleClick(product)} 
          className={styles["item-info__icon"]}>
          <Image src={iconAddCart} alt />
        </figure>
      </div>
    </div>

  );
}

export {ProductItem};