import React from 'react';
import Image from 'next/image';
import { ShoppingCartItem } from '../../components/ShoppingCartItem';
import { OrderSummary } from '../../components/OrderSummary';
import './ShoppingCart.scss';
import iconArrow from '@icons/flechita.svg';

function ShoppingCart() {
  return (
    <aside className="shopping-cart">
      <div className="icon-container">
        <Image className="icon-container--close" src={iconArrow} alt="close" />
      </div>
      <p className="shoppingCart-title">Shopping cart</p>
      <div className="shoppingCart__products">
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
      </div>
      <OrderSummary />
      <button className="button button--primary">Check out</button>
    </aside>
  );
}

export { ShoppingCart };
