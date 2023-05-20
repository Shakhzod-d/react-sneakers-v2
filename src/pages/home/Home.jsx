import React, { useEffect } from 'react';
import { CardContainer, Header, Modal, Wrapper } from '../../components';

import { useDispatch, useSelector } from 'react-redux';

import { deleteItem, fetchItems, likeSneakers, postItem } from '../../redux/thunk';
import { useNavigate } from 'react-router-dom';
import { addToFavorites } from './helpers';

export const Home = () => {
  const [pageCount, setPageCount] = React.useState(1);
  const [isOpen, setOpen] = React.useState(false);
  const { allSneakers } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigete = useNavigate();

  const inc = () => {
    setPageCount((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    const mainUrl = `http://localhost:3030`;
    const restUrl = `/allSneakers/?_page=${pageCount}&_limit=4`;
    dispatch(fetchItems(`${mainUrl}${restUrl}`, `SAVE_ALL_SNEAKERS`));
    navigete(restUrl);
  }, [pageCount]);

  return (
    <div className="homeContainer">
      <Modal isOpen={isOpen} close={() => setOpen(false)} />
      <Wrapper>
        <Header open={() => setOpen(true)} />
      </Wrapper>
      <Wrapper>
        <CardContainer onClickItem={addToFavorites} items={allSneakers} />
      </Wrapper>

      <Wrapper>
        <div style={{ margin: '4rem auto' }}>
          <button onClick={() => setPageCount((prevValue) => prevValue - 1)}>
            Go back one page
          </button>
          <span style={{ fontSize: '32px', margin: '1rem' }}>{pageCount}</span>
          <button onClick={() => inc()}>Go next page</button>
        </div>
      </Wrapper>
    </div>
  );
};
