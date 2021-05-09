import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalFilter),
    );
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLoading,
  getAllContacts,
  getFilter,
  getVisibleContacts,
};
