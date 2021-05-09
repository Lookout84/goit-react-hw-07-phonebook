import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

const ContactList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={style.item} key={id}>
          {name}: {number}
          <button
            className={style.button}
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array.isRequired,
};
