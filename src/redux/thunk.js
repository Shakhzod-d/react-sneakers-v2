export const fetchItems = (url, ACTION_NAME) => async (disatch) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    disatch({ type: ACTION_NAME, payload: data });
  } catch (error) {
    console.error('ERROR FETCH ITEMS');
  }
};

export const postItem = (url, sneakersObj) => async (disatch) => {
  try {
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sneakersObj),
    };

    const response = await fetch(url, config);
    const data = await response.json();
    // console.log(data);
    // disatch({ type: ACTION_NAME, payload: data });
  } catch (error) {
    console.error('ERROR FETCH ITEMS');
  }
};

export const likeSneakers = (url, likedSneakersObj) => async (dispatch) => {
  try {
    const config = {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(likedSneakersObj),
    };

    const response = await fetch(url, config);
    if (response.ok) {
      dispatch(fetchItems(`http://localhost:3030/allSneakers`, `SAVE_ALL_SNEAKERS`));
    }
  } catch (error) {
    console.error('ERROR FETCH ITEMS');
  }
};
