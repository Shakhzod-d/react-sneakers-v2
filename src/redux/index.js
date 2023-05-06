import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import sneakersReducer from './sneakersReducer';

// store 1. reducer, 2. state
export const store = createStore(sneakersReducer, applyMiddleware(thunk));
// console.log(store.getState());
