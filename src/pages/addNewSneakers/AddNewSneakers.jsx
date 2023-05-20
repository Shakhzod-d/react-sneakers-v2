import React from 'react';
import { Header } from '../../components/Header/Header';
import { Wrapper } from '../../components';
import { Form } from './UI';

export const AddNewSneakers = () => {
  return (
    <div>
      <Wrapper>
        <Header open={() => {}} />
      </Wrapper>
      <Wrapper>
        <Form />
      </Wrapper>
    </div>
  );
};
