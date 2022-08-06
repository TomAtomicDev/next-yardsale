import React, { useState, useContext } from 'react';
import './Header.scss';
import {MenuMobile} from 'components/MenuMobile';
import {AppContext} from 'context/AppContext';
import {MyOrder} from 'containers/MyOrder';
import iconMenu from '@icons/icon_menu.svg';
import iconLogo from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';

function Header () {

  const { state: {cart}} = useContext(AppContext);
  
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle);
  }

  return (
    <nav className="nav">
      <img className="nav__menu-icon" src={iconMenu} alt="Menu" />
      <div className="nav-left">
        <img src={iconLogo} alt="Logo" className="nav__logo" />
        <ul className="nav-list nav-left__list">

          <li className="nav-list__item">
            <a href="/" className="nav-list__link">All</a>
          </li>

          <li className="nav-list__item">
            <a href="/" className="nav-list__link">Clothes</a>
          </li>

          <li className="nav-list__item">
            <a href="/" className="nav-list__link">Electronics</a>
          </li>

          <li className="nav-list__item">
            <a href="/" className="nav-list__link">Furniture</a>
          </li>

          <li className="nav-list__item">
            <a href="/" className="nav-list__link">Toys</a>
          </li>

          <li className="nav-list__item">
            <a href="/" className="nav-list__link">Others</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          <li className="nav-right__email" onClick={handleToggle}>
              myadress@example.com
            </li>
          <li 
            className="nav-right__shopping" 
            onClick={()=>setToggleOrders(prevToggle => !prevToggle)}>
            
              <img className="nav-right__shopping-icon" src={iconShoppingCart} alt />
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