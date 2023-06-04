import React, { useEffect } from 'react';
import { CardContainer, Header, Modal, Wrapper } from '../../components';
import { collection, getDocs, addDoc, limit, query, orderBy, startAfter } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../firebase-config.js';

import { useNavigate } from 'react-router-dom';
// import { addToFavorites } from './helpers';
import { MUIPagination } from '../../components/Pagination/Pagination';
import MyLoader from '../../components/ContentLoader/ContentLoader';
import { fetchItems, toggleLike } from '../../redux/thunk';

export const Home = () => {
  const [isOpen, setOpen] = React.useState(false);

  const { allSneakers, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const sneakersRef = query(collection(db, 'sneakers'), limit(20));
  const favoritesRef = collection(db, 'favorites');

  useEffect(() => {
    dispatch(fetchItems(sneakersRef, `SAVE_ALL_SNEAKERS`));
  }, []);

  return (
    <div className="homeContainer">
      <Modal isOpen={isOpen} close={() => setOpen(false)} />
      <Wrapper>
        <Header open={() => setOpen(true)} />
      </Wrapper>
      <Wrapper>
        <CardContainer
          isLoading={isLoading}
          addToFavorites={(item) => dispatch(toggleLike(item, favoritesRef))}
          items={allSneakers}
        />
        {/* <MUIPagination changePageCount={setPageCount} /> */}
      </Wrapper>
    </div>
  );
};
