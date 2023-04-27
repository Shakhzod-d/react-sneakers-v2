const initialState = {
  isLoading: false,
  favorites: [],
};

const addTofavourite = (state, item) => {
  console.log(item);
  return {
    ...state,
    favorites: [...state.favorites, item],
  };
};

const sneakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return addTofavourite(state, action.payload);

    default:
      return state;
  }
};

export default sneakersReducer;
