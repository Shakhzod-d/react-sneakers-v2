import React, { useEffect } from 'react';
import { CardContainer, Header, Modal, Wrapper } from '../../components';
import { collection, getDocs, limit, query, orderBy, startAfter } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../firebase-config.js';

import { useNavigate } from 'react-router-dom';
import { addToFavorites } from './helpers';
import { MUIPagination } from '../../components/Pagination/Pagination';
import MyLoader from '../../components/ContentLoader/ContentLoader';

export const Home = () => {
  const [pageCount, setPageCount] = React.useState(0);
  const [isOpen, setOpen] = React.useState(false);
  const [sneakers, setSneakers] = React.useState([]);
  const [response, setResponse] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const { allSneakers } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const sneakersRef = query(collection(db, 'sneakers'), limit(20));

  const fetchItems = async () => {
    setLoading(true);
    const res = await getDocs(sneakersRef);
    const data = res.docs.map((item) => {
      const newObj = {
        ...item.data(),
        id: item.id,
      };
      return newObj;
    });
    setSneakers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="homeContainer">
      <Modal isOpen={isOpen} close={() => setOpen(false)} />
      <Wrapper>
        <Header open={() => setOpen(true)} />
      </Wrapper>
      <Wrapper>
        <CardContainer isLoading={isLoading} onClickItem={addToFavorites} items={sneakers} />
        {/* <MUIPagination changePageCount={setPageCount} /> */}
      </Wrapper>
    </div>
  );
};
