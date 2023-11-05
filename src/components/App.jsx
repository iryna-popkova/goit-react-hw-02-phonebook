import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from './contactList';
import { Filter } from './filter';
import { ContactForm } from './contactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;

    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} already in phonebook!`);
      return;
    }

    const contact = {
      ...newContact,
      id: nanoid(),
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
    alert(`${newContact.name} added to your contacts!`);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normFilter) ||
        contact.number.includes(filter)
    );
  };

  resetFilters = () => {
    this.setState({
      filters: '',
    });
  };

  removeContact = contactId => {
    const contactToRemove = this.state.contacts.find(
      contact => contactId === contact.id
    );
    alert(`${contactToRemove.name} removed from your phone book`);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { addContact, changeFilter, resetFilters, removeContact, state } =
      this;

    return (
      <div>
        <h1>Phonebook</h1>
        <div>
          <h2>Add contact</h2>
          <ContactForm onSubmit={addContact} />
        </div>
        <div>
          <h2>Contacts</h2>
          {state.contacts.length !== 0 ? (
            <>
              <Filter value={state.filter} onChange={changeFilter} />
              <ContactList
                contacts={filteredContacts}
                onDelete={removeContact}
                onReset={resetFilters}
              />
            </>
          ) : (
            <p>
              {' '}
              "There are no contacts in your phonebook. Please add your first
              contact!"
            </p>
          )}
        </div>
      </div>
    );
  }
}
