import React from 'react';
import { BsCart2, BsHeart } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import './Header.css';

export const Header = ({ open = () => {} }) => {
  const navigate = useNavigate();

  const openFavoritesPage = () => {
    navigate(`/favorites`);
  };

  return (
    <div className="headerContainer">
      <div
        className="headerLeft"
        onClick={() => navigate(`/allSneakers`)}
        style={{ cursor: 'pointer' }}
      >
        <img className="logo" src="/assets/images/logo.png" alt="" />
        <div className="headerLeftText">
          <p className="headerLeftLogoFont">REACT SNEAKERS</p>
          <p className="magazinText">Магазин лучших кроссовок</p>
        </div>
      </div>

      <div className="headerRight">
        <span className="addNewSneakers" onClick={() => navigate(`/addNewSneakers`)}>
          <AiOutlinePlus size={24} />
        </span>
        <div className="cartIconContainer" onClick={open}>
          <span>
            <BsCart2 size={24} />
          </span>
          &nbsp;
          <span>1205 руб.</span>
        </div>
        <span onClick={openFavoritesPage} style={{ cursor: 'pointer' }}>
          <BsHeart size={24} />
        </span>
        <span>
          <BiUserCircle size={24} />
        </span>
      </div>
    </div>
  );
};
