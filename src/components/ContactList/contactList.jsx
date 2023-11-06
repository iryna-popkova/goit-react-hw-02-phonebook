import { List } from './contactList.styled';
import { ContactItem } from '../ContactItem/contactItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        );
      })}
    </List>
  );
};
