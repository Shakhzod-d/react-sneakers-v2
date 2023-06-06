import React, { useEffect } from 'react';
import { collection } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchItems, toggleLike } from '../../redux/thunk';
import { CardContainer, Header, Modal, Wrapper } from '../../components';

import { db } from '../../firebase-config';

export const Favorites = () => {
  const { favorites, isLoading, isCartOpen, cart: cartItems } = useSelector((state) => state);
  const dispatch = useDispatch();
  const favoritesRef = collection(db, 'favorites');
  const cartRef = collection(db, 'cart');

  useEffect(() => {
    dispatch(fetchItems(favoritesRef, `SAVE_FAVORITE_SNEAKERS`));
    dispatch(fetchItems(cartRef, `SAVE_CART_ITEMS`));
  }, []);

  return (
    <div>
      <Modal
        isOpen={isCartOpen}
        close={() => dispatch({ type: `CART_MODAL_TOGGLE` })}
        items={cartItems}
      />
      <Wrapper>
        <Header open={() => dispatch({ type: `CART_MODAL_TOGGLE` })} />
      </Wrapper>
      <Wrapper>
        <CardContainer
          isLoading={isLoading}
          addToFavorites={(item) => dispatch(toggleLike(item, favoritesRef))}
          addToCart={addToCart}
          items={favorites}
        />
      </Wrapper>
    </div>
  );
};
