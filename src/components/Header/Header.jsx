import React from 'react';
import { BsCart2, BsHeart } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import logo from '../../assets/images/logo.png';

import './Header.css';

export const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <img className="logo" src={logo} alt="" />
        <div>
          <p className='headerLeftLogoFont'>REACT SNEAKERS</p>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="headerRight">
        <span>
          <BsCart2 />
        </span>
        <span>1205 руб.</span>
        <span>
          <BsHeart />
        </span>
        <span>
          <BiUserCircle />
        </span>
      </div>
    </div>
  );
};

// default export
// named export
