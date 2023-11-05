import { ListItem, ContactData, RemoveButton } from './contactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => (
  <ListItem>
    <ContactData>
      {name}: {number}
    </ContactData>
    <RemoveButton onClick={() => onDelete(id)}>Delete</RemoveButton>
  </ListItem>
);
