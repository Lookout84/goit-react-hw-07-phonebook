import { combineReducers } from 'redux';
import actions from './actions';
// import { ADD, DELETE, FILTER } from './types';

import { createReducer } from '@reduxjs/toolkit';

// const addNewContact = (state, payload) => {
//   const newName = state.map(
//     contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
//   );
//   if (newName !== undefined) {
//     alert(`${payload.name} is already in contacts`);
//   } else if (payload.name.length === 0) {
//     alert('Fields must be filled!');
//   } else return newName;
// };

// const items = (state = [], { payload, type }) => {
//   switch (type) {
//     case ADD:
//       return addNewContact(state, payload) ? [state] : [...state, payload];

//     case DELETE:
//       return state.filter(item => item.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', action) => {
//   switch (action.type) {
//     case FILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

const items = createReducer([], {
  [actions.addNewContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
