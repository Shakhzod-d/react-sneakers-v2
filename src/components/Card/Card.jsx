import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Card.css';

export const Card = ({ item, addToFavorites, addToCart, getSingleSneakers }) => {
  const { id, imageUrl, price, title, isLiked } = item;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="cardHeader">
        <BsHeart
          className={isLiked ? 'red' : 'emptyHeart'}
          size={24}
          onClick={() => addToFavorites(item)}
        />
        <img
          className="img"
          width={'100%'}
          src={imageUrl}
          onClick={() => getSingleSneakers(item)}
          alt="green sneakers"
        />
      </div>
      <div style={{ width: '100%' }}>
        <p className="cardTitle">{title}</p>
      </div>
      <div className="cardFooter">
        <div>
          <span className="tsena">Цена:</span> <br /> <span className="summa">{price} руб.</span>
        </div>
        <div>
          <img onClick={() => dispatch(addToCart(item))} src="/assets/icons/add.png" alt="" />
        </div>
      </div>
    </div>
  );
};
