import React from 'react';
import { ListItem, ContactData, RemoveButton } from './contactItem.styled';

export const ContactItem = ({ id, name, number, onClick }) => (
  <ListItem>
    <ContactData>
      {name}: {number}
    </ContactData>
    <RemoveButton
      type="button"
      onClick={() => {
        onClick(id);
      }}
    >
      Delete
    </RemoveButton>
  </ListItem>
);
