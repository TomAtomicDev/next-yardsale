import React from 'react';
import { ProductInfo } from '../../components/ProductInfo';
import Image from 'next/image';
import iconClose from '@icons/icon_close.png';
import './ProductDetail.scss';

function ProductDetail() {
  return (
    <aside className="product-detail">
      <div className="product-detail__icon-container">
        <Image className="product-detail__icon-close" src={iconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
}

export { ProductDetail };
