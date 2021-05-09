import React, { Component } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
// import shortid from 'shortid';

class PhoneBook extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // addNewContact = arr => {
  //   const newName = this.state.contacts
  //     .map(contact => contact.name)
  //     .includes(arr.name);

  //   if (newName) {
  //     alert(`${arr.name} is already in contacts`);
  //   } else if (arr.name.length === 0) {
  //     alert('Fields must be filled!');
  //   } else {
  //     const contact = {
  //       ...arr,
  //       id: shortid.generate(),
  //     };

  //     this.setState(prevState => ({
  //       contacts: [...prevState.contacts, contact],
  //     }));
  //   }
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // changeFilterContacts = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   console.log(parsedContacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
  render() {
    // const { filter } = this.state;
    // const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        {/* <ContactForm onAddNewContact={this.addNewContact} /> */}
        <ContactForm />
        <h2>Contacts</h2>
        {/* <Filter value={filter} onChange={this.changeFilterContacts} /> */}
        <Filter />
        {/* <ContactList
          contacts={visibleContacts}
          onDaleteContact={this.deleteContact}
        /> */}
        <ContactList />
      </>
    );
  }
}

export default PhoneBook;
