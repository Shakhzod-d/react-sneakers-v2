import React, { useEffect } from 'react';
import { CardContainer, Header, Wrapper } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../redux/thunk';

export const Favorites = () => {
  const { allSneakers } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems(`http://localhost:3030/favorites`, `SAVE_ALL_SNEAKERS`));
  }, []);

  return (
    <div>
      <Wrapper>
        <Header />
      </Wrapper>
      <Wrapper>
        <CardContainer items={allSneakers} />
      </Wrapper>
    </div>
  );
};
