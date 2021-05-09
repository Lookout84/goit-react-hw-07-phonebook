import { combineReducers } from 'redux';
import actions from './actions';

import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  // [actions.addNewContact]: (state, { payload }) => [...state, payload],
  // [actions.deleteContact]: (state, { payload }) =>
  //   state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ items, loading, filter });
