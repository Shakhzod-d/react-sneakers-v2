import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import './Card.css';

export const Card = ({ item, onClickItem }) => {
  const { id, imageUrl, price, title } = item;

  const dispatch = useDispatch();

  // const hanleLike = (item) => {
  //   dispatch({ type: 'ADD_TO_FAVOURITE', payload: item });
  //   setLiked((prevValue) => !prevValue);
  // };

  return (
    <div className="card">
      <div className="cardHeader">
        <BsHeart
          className={item.isLiked ? 'red' : 'emptyHeart'}
          size={24}
          onClick={() => onClickItem(item)}
        />
        <img width={'100%'} src={imageUrl} alt="green sneakers" />
      </div>
      <p className="cardTitle">{title}</p>

      <div className="cardFooter">
        <div>
          <span className="tsena">Цена:</span> <br /> <span className="summa">{price} руб.</span>
        </div>
        <div>
          <img src="/assets/icons/add.png" alt="" />
        </div>
      </div>
    </div>
  );
};
