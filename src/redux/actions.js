import shortid from 'shortid';
// import { ADD, DELETE, FILTER } from './types';
import { createAction } from '@reduxjs/toolkit';

// const addNewContact = (name, number) => ({
//   type: ADD,
//   payload: { contacts: { id: shortid.generate(), name: name, number: number } },
// });

// const deleteContact = contactId => ({
//   type: DELETE,
//   payload: { id: contactId },
// });

// const filterContact = filter => ({
//   type: FILTER,
//   payload: filter,
// });

const addNewContact = createAction(
  'contacts/AddNewContact',
  ({ name, number }) => {
    return {
      payload: {
        id: shortid.generate(),
        name,
        number,
      },
    };
  },
);

const deleteContact = createAction('contacts/DeleteContact');

const filterContact = createAction('contacts/FilterContact');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addNewContact, deleteContact, filterContact };
