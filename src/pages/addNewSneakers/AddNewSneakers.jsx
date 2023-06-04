import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { Modal, Wrapper } from '../../components';
import { Form } from './UI';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useDispatch, useSelector } from 'react-redux';

export const AddNewSneakers = () => {
  const { favorites, isLoading, isCartOpen } = useSelector((state) => state);
  const dispatch = useDispatch();

  const newSneakersRef = collection(db, 'sneakers');
  const navigate = useNavigate();
  const submit = async (data) => {
    let time = Date.now();
    const newData = {
      ...data,
      id: String(time),
      isLiked: false,
    };
    const res = await addDoc(newSneakersRef, newData);

    if (res) {
      window.alert('New sneakers successfully created');
      navigate(`/allSneakers`);
    }
  };

  return (
    <div>
      <Modal isOpen={isCartOpen} close={() => dispatch({ type: `CART_MODAL_TOGGLE` })} />
      <Wrapper>
        <Header open={() => dispatch({ type: `CART_MODAL_TOGGLE` })} />
      </Wrapper>
      <Wrapper>
        <Form addItem={submit} />
      </Wrapper>
    </div>
  );
};
