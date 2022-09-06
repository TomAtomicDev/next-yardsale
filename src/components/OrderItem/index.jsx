import React, { useContext } from 'react';
import Image from 'next/image';
import { AppContext } from 'context/AppContext';
import iconClose from '@icons/icon_close.png';
import styles from './OrderItem.module.scss'; //OrderItem for the teacher

function OrderItem({ product, keyIndex }) {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = () => {
    removeFromCart(keyIndex);
  };

  return (
    <div className={styles.orderItem}>
      <figure className={styles['orderItem__img']}>
        <Image loader={() => product.images[0]} src={product.images[0]} className={styles['orderItem__img']} alt={product.title} width="100%" height="100%" layout="responsive" />
      </figure>
      <p className={styles['orderItem__name']}>{product.title}</p>
      <p className={styles['orderItem__price']}>${product.price}</p>
      <Image src={iconClose} alt="close" onClick={handleRemove} />
    </div>
  );
}

export { OrderItem };
