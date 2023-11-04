import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from './contactList';
import { Filter } from './filter';
import { ContactItem } from './contactItem';

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

  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    const normName = name.toLowerCase();

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === normName
      )
    ) {
      return alert(`${name} is already in contacts!`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  resetFilters = () => {
    this.setState({
      filters: '',
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { addContact, filterContacts, resetFilters, removeContact, state } =
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
              <Filter value={state.filter} onChange={filterContacts} />
              <ContactList
                contacts={filteredContacts}
                onDeleteButton={deleteContact}
              />
            </>
          ) : (
            <Message message="There are no contacts in your phonebook. Please add your first contact!" />
          )}
        </Section>
      </Container>
    );
  }
}
