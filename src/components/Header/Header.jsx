import React from 'react';
import { BsCart2, BsHeart } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

import './Header.css';

export const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <img className="logo" src='/assets/images/logo.png' alt="" />
        <div className="headerLeftText">
          <p className="headerLeftLogoFont">REACT SNEAKERS</p>
          <p className="magazinText">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="headerRight">
        <span>
          <BsCart2 size={24} />
        </span>
        <span>1205 руб.</span>
        <span>
          <BsHeart size={24} />
        </span>
        <span>
          <BiUserCircle size={24} />
        </span>
      </div>
    </div>
  );
};

// default export
// named export
