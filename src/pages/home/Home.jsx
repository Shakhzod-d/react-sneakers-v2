import React, { useEffect } from 'react';
import { CardContainer, Header, Wrapper } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, likeSneakers, postItem } from '../../redux/thunk';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [pageCount, setPageCount] = React.useState(1);
  const { allSneakers } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigete = useNavigate();

  const addToFavorites = (sneakersObj) => {
    const likedSneakers = {
      ...sneakersObj,
      isLiked: true,
    };

    const url = `http://localhost:3030/favorites`;
    dispatch(postItem(url, likedSneakers));

    const likedUrl = `http://localhost:3030/allSneakers/${sneakersObj.id}`;
    dispatch(likeSneakers(likedUrl, { isLiked: true }));
  };

  const inc = () => {
    setPageCount((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    // http://localhost:3030/allSneakers?_page=3&_limit=4
    const mainUrl = `http://localhost:3030`;
    const restUrl = `/allSneakers?_page=${pageCount}&_limit=4`;
    dispatch(fetchItems(`${mainUrl}${restUrl}`, `SAVE_ALL_SNEAKERS`));
    navigete(restUrl);
  }, [pageCount]);

  return (
    <div className="homeContainer">
      <Wrapper>
        <Header />
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
