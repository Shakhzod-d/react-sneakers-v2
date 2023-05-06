export const fetchItems = (url, ACTION_NAME) => async (disatch) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    disatch({ type: ACTION_NAME, payload: data });
  } catch (error) {
    console.error('ERROR FETCH ITEMS');
  }
};
