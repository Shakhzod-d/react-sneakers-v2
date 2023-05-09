import React, { useEffect } from 'react';
import { CardContainer, Header, Wrapper } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, likeSneakers, postItem } from '../../redux/thunk';

export const Home = () => {
  const { allSneakers } = useSelector((state) => state);
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(fetchItems(`http://localhost:3030/allSneakers`, `SAVE_ALL_SNEAKERS`));
  }, []);

  return (
    <div className="homeContainer">
      <Wrapper>
        <Header />
      </Wrapper>
      <Wrapper>
        <CardContainer onClickItem={addToFavorites} items={allSneakers} />
      </Wrapper>
    </div>
  );
};
