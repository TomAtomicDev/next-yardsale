import React from 'react';
import Image from 'next/image';
import './OrderSummary.scss'; // just Order for the teacher... OrderItem

import iconArrow from '@icons/flechita.svg';

function OrderSummary() {
  return (
    <div className="order-summary">
      <p className="order-summary__info">
        <span className="order-summary__date">31.Jan.2022</span>
        <span className="order-summary__count">6 articles</span>
      </p>
      <p className="order-summary__totalmoney">$560.00</p>
      <Image src={iconArrow} alt="arrow" />                
    </div>
  );
}

export { OrderSummary };
