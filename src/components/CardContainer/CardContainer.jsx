import React from 'react';

import { Card } from '../Card/Card';

import './CardContainer.css';
import MyLoader from '../ContentLoader/ContentLoader';

export const CardContainer = ({ isLoading, items, onClickItem }) => {
  return (
    <div className="cardContainer">
      {isLoading
        ? [...new Array(4)].fill('null').map((item, idx) => <MyLoader key={idx} />)
        : items.map((item) => <Card key={item.id} item={item} onClickItem={onClickItem} />)}
    </div>
  );
};
