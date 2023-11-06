import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ContactList } from '../ContactList/contactList';
import { Filter } from '../Filter/filter';
import { ContactForm } from '../ContactForm/contactForm';
import { Container, Section, Title, SectionTitle, Message } from './App.styled';

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
      Notify.failure(`${newContact.name} already in phonebook!`);
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
    Notify.success(`${newContact.name} added to your contacts!`);
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
    Notify.success(`${contactToRemove.name} removed from your phone book`);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { addContact, changeFilter, resetFilters, removeContact, state } =
      this;

    return (
      <Container>
        <Title>Phonebook</Title>
        <Section>
          <SectionTitle>Add contact</SectionTitle>
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>
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
            <Message>
              {' '}
              "There are no contacts in your phonebook. Please add your first
              contact!"
            </Message>
          )}
        </Section>
      </Container>
    );
  }
}
