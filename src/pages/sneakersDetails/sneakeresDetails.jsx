import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '../../firebase-config';

export const SneakeresDetails = () => {
  const { aPairOfSneakers } = useSelector((state) => state);
  const { cardId } = useParams();
  const dispatch = useDispatch();

  const getSingleSneakers = async (id) => {
    const docRef = doc(db, 'sneakers', id);

    const resData = await getDoc(docRef);
    if (resData.data()) {
      dispatch({ type: 'SAVE_SINGLE_SNEAKERS', payload: resData.data() });
    }
  };
  console.log(aPairOfSneakers);

  React.useEffect(() => {
    getSingleSneakers(cardId);
  }, []);

  return (
    <div>
      <h1>sneakeresDetails</h1>
      <div>
        <h2>{aPairOfSneakers?.title}</h2>
        <img width={'300px'} src={aPairOfSneakers?.imageUrl} alt="ss" />
        <b>{aPairOfSneakers?.price} руб.</b>
      </div>
      <Link to={`/allSneakers`}>Go home</Link>
    </div>
  );
};
