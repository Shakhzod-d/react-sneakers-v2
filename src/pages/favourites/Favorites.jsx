import React, { useEffect } from 'react';
import { collection } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, toggleLike } from '../../redux/thunk';
import { CardContainer, Header, Modal, Wrapper } from '../../components';

import { db } from '../../firebase-config';

export const Favorites = () => {
  const { favorites, isLoading, isCartOpen } = useSelector((state) => state);
  const dispatch = useDispatch();
  const favoritesRef = collection(db, 'favorites');

  useEffect(() => {
    dispatch(fetchItems(favoritesRef, `SAVE_FAVORITE_SNEAKERS`));
  }, []);

  return (
    <div>
      <Modal isOpen={isCartOpen} close={() => dispatch({ type: `CART_MODAL_TOGGLE` })} />
      <Wrapper>
        <Header open={() => dispatch({ type: `CART_MODAL_TOGGLE` })} />
      </Wrapper>
      <Wrapper>
        <CardContainer
          isLoading={isLoading}
          addToFavorites={(item) => dispatch(toggleLike(item, favoritesRef))}
          items={favorites}
        />
      </Wrapper>
    </div>
  );
};
