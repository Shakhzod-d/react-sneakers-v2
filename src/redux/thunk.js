import { getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';

// General function || HOF high order function
export const fetchItems = (collectionRef, ACTION_NAME) => async (dispatch) => {
  try {
    const res = await getDocs(collectionRef);
    const data = res.docs.map((item) => {
      const newObj = {
        ...item.data(),
        id: item.id,
      };
      return newObj;
    });
    dispatch({ type: ACTION_NAME, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const toggleLike = (item, favoritesRef) => async (dispatch) => {
  try {
    const likeSneakersObj = {
      ...item,
      isLiked: !item.isLiked,
    };
    let res;
    if (item.isLiked) {
      res = await deleteDoc(doc(favoritesRef, item.id));
      dispatch(fetchItems(favoritesRef, `SAVE_FAVORITE_SNEAKERS`));
    } else {
      res = await addDoc(favoritesRef, likeSneakersObj);
    }

    if (res) {
      window.alert('Successfully done');
    }
  } catch (error) {
    console.error(error);
  }
};
