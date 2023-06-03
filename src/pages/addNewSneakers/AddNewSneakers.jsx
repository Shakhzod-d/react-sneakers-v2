import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { Wrapper } from '../../components';
import { Form } from './UI';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';

export const AddNewSneakers = () => {
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
      <Wrapper>
        <Header open={() => {}} />
      </Wrapper>
      <Wrapper>
        <Form addItem={submit} />
      </Wrapper>
    </div>
  );
};
