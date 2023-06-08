import React, { useEffect } from 'react';
import { CardContainer, Header, Modal, Wrapper } from '../../components';
import { collection, deleteDoc, doc, getDoc, limit, query } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../firebase-config.js';

import { useNavigate } from 'react-router-dom';

import { addToCart, fetchItems, toggleLike } from '../../redux/thunk';

export const Home = () => {
  const { allSneakers, isLoading, isCartOpen, cart: cartItems } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sneakersRef = query(collection(db, 'sneakers'), limit(20));
  const favoritesRef = collection(db, 'favorites');
  const cartRef = collection(db, 'cart');

  const deleteItem = async (item) => {
    const docRef = doc(db, 'cart', item.id);
    await deleteDoc(docRef);
    dispatch(fetchItems(cartRef, `SAVE_CART_ITEMS`));
  };

  const onClickCard = (item) => {
    navigate(`/details/${item.id}`);
  };

  useEffect(() => {
    dispatch(fetchItems(sneakersRef, `SAVE_ALL_SNEAKERS`));
    dispatch(fetchItems(cartRef, `SAVE_CART_ITEMS`));
  }, []);

  return (
    <div className="homeContainer">
      <Modal
        items={cartItems}
        isOpen={isCartOpen}
        close={() => dispatch({ type: `CART_MODAL_TOGGLE` })}
        deleteItem={deleteItem}
      />

      <Wrapper>
        <Header open={() => dispatch({ type: `CART_MODAL_TOGGLE` })} />
      </Wrapper>
      <Wrapper>
        <CardContainer
          isLoading={isLoading}
          addToFavorites={(item) => dispatch(toggleLike(item, favoritesRef))}
          addToCart={addToCart}
          items={allSneakers}
          getSingleSneakers={onClickCard}
        />
        {/* <MUIPagination changePageCount={setPageCount} /> */}
      </Wrapper>
    </div>
  );
};
