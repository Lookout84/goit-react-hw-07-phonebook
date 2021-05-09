// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactRequest = createAction('contacts/addContactsRequest');
const addContactSuccess = createAction('contacts/addContactsSuccess');
const addContactError = createAction('contacts/addContactsError');

const deleteContactRequest = createAction('contacts/deleteContactsRequest');
const deleteContactSuccess = createAction('contacts/deleteContactsSuccess');
const deleteContactError = createAction('contacts/deleteContactsError');

const filterContact = createAction('contacts/FilterContact');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContact,
};
