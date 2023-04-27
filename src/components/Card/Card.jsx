import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import './Card.css';

export const Card = ({ item }) => {
  const { id, imageUrl, price, title } = item;
  const [isLiked, setLiked] = React.useState(false);
  const dispatch = useDispatch();

  const hanleLike = (item) => {
    dispatch({ type: 'ADD_TO_FAVOURITE', payload: item });
    setLiked((prevValue) => !prevValue);
  };

  return (
    <div className="card">
      <div className="cardHeader">
        <BsHeart
          className={isLiked ? 'red' : 'emptyHeart'}
          size={24}
          onClick={() => hanleLike(item)}
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
