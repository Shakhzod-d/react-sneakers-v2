import React from 'react';

import { Card } from '../Card/Card';

import './CardContainer.css';

export const CardContainer = ({ items }) => {
  //   console.log(data);
  return (
    <div className="cardContainer">
      {items.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
};

// dispatch reducer ishga tushuradi
// action { type: "INC", payload: item }
// dispatch({type: "ADD" , payload: item})
