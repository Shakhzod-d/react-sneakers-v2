const initialState = {
  isLoading: true,
  allSneakers: [],
  favorites: [],
  isCartOpen: true,
};

const addTofavourite = (state, item) => {
  return {
    ...state,
    favorites: [...state.favorites, item],
  };
};

const saveAllSneakers = (state, allSneakers = []) => {
  return {
    ...state,
    allSneakers: allSneakers,
    isLoading: false,
  };
};

const saveFavoriteSneakers = (state, favorites = []) => {
  return {
    ...state,
    favorites,
    isLoading: false,
  };
};

const toggleCartModal = (state) => {
  return {
    ...state,
    isLoading: false,
    isCartOpen: !state.isCartOpen,
  };
};

const sneakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return addTofavourite(state, action.payload);

    case `SAVE_ALL_SNEAKERS`:
      return saveAllSneakers(state, action.payload);

    case `SAVE_FAVORITE_SNEAKERS`:
      return saveFavoriteSneakers(state, action.payload);

    case `CART_MODAL_TOGGLE`:
      return toggleCartModal(state);

    default:
      return state;
  }
};

export default sneakersReducer;
