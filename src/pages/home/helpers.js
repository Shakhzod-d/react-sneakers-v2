import { deleteItem, likeSneakers, postItem } from '../../redux/thunk';

export function addToFavorites(sneakersObj, dispatch, navigate) {
  const likedSneakers = {
    ...sneakersObj,
    isLiked: true,
  };

  if (sneakersObj.isLiked) {
    const likedUrl = `http://localhost:3030/allSneakers/${sneakersObj.id}`;
    dispatch(likeSneakers(likedUrl, { isLiked: false }));

    const url = `http://localhost:3030/favorites/${sneakersObj.id}`;
    dispatch(deleteItem(url, navigate));
  } else {
    const url = `http://localhost:3030/favorites`;
    dispatch(postItem(url, likedSneakers));

    const likedUrl = `http://localhost:3030/allSneakers/${sneakersObj.id}`;
    dispatch(likeSneakers(likedUrl, { isLiked: true }));
  }
}
