import React from 'react';
import { List } from './contactList.styled';
import ContactItem from './contactItem';

export const ContactList = ({ contacts, onRemoveContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => {
      return (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onRemoveContact}
        />
      );
    })}
  </List>
);
