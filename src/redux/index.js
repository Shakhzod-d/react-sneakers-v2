import { createStore } from 'redux';
import sneakersReducer from './sneakersReducer';

// store 1. reducer, 2. state
export const store = createStore(sneakersReducer);
// console.log(store.getState());
