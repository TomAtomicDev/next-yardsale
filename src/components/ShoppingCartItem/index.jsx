import React from 'react';
import Image from 'next/image';
import './ShoppingCartItem.scss';

import iconClose from '@icons/icon_close.png';

function ShoppingCartItem() {
  return (
    <div className="shoppingCart-Item">
      <figure className="shoppingCart-Item__img">
        <Image src="https://images.pexels.com/photos/844734/pexels-photo-844734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="shoppingCart-Item__img" />
      </figure>
      <p className="shoppingCart-Item__name">Kindle Paperwhite 10ma Gen</p>
      <p className="shoppingCart-Item__price">$129,00</p>
      <Image src={iconClose} alt="delete" />
    </div>
  );
}

export { ShoppingCartItem };
