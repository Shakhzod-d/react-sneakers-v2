import React from 'react';
import { BsHeart } from 'react-icons/bs';

import './Card.css';

export const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <BsHeart className="emptyHeart" size={24} />
        <img width={'100%'} src="/assets/images/1.jpg" alt="green sneakers" />
      </div>
      <p className="cardTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>

      <div className="cardFooter">
        <div>
          <span className="tsena">Цена:</span> <br /> <span className="summa">12 999 руб.</span>
        </div>
        <div>
          <img src="/assets/icons/add.png" alt="" />
        </div>
      </div>
    </div>
  );
};
