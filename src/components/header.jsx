import React, { useState, useContext } from 'react'
import '@styles/Header.scss'
import MenuDescktop from './MenuDescktop'
import shoppingCart from "@icons/icon_shopping_cart.svg";
import logo from "@logos/logo_yard_sale.svg";
import menuImg from '@icons/icon_menu.svg'
import MenuMobile from './MenuMobile'
import AppContext from '../context/AppContext';
import MyOrder from '../components/MyOrder';





const Header = () => {
  const [tonggle, settoggle] = useState(false);
   // valor que ejecuta lo que está almacenado en al estado y la segunda es la que altera el estado
   const [tonggleMobile, setTonggleMobile] = useState(false);
   const [toggleOrders, settoggleOrders] = useState(false);

   const {state} = useContext(AppContext);

   const handletonggle = () => {
    settoggle(!tonggle);
  }
  const handletonggleMobile = () => {
    setTonggleMobile(!tonggleMobile);
  }
  
    return(
        <nav>
    <img src={menuImg} alt="menu" className="menu" onClick={handletonggleMobile}/>
    {tonggleMobile && <MenuMobile/>}

    <div className="navbar-left">
      <img src={logo} alt="logo" className="nav-logo" />
      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div className="navbar-right">
      <ul>
        <li className="navbar-email" onClick={handletonggle}>platzi@example.com </li>
        <li className="navbar-shopping-cart" onClick={() => settoggleOrders(!toggleOrders)}>
          <img src={shoppingCart} alt="shopping cart" />
          {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
        </li>
      </ul>
    </div>
    {tonggle? <MenuDescktop /> : null}
    {/* las llaves identifican js esta pieza de codigo hace que se muestre el menú */}
    {toggleOrders ? <MyOrder /> : null}
  </nav>
    );
}

export default Header