import React from 'react';
import { Card, CardContainer, Header, Wrapper } from '../../components';
import data from '../../data';
import { useSelector } from 'react-redux';

export const Home = () => {
  const { allSneakers } = data;
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="homeContainer">
      <Wrapper>
        <Header />
      </Wrapper>
      <Wrapper>
        <CardContainer items={allSneakers} />
        {/* <CardContainer items={allSneakers} /> */}
      </Wrapper>
    </div>
  );
};
