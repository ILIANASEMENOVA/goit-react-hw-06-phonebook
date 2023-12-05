import { useDispatch, useSelector } from 'react-redux';
import ContactsListStyled from './ContactList.styled';

import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

const findContacts = (contacts, filter) => {
  const formatedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(formatedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const findedContacts = findContacts(contacts, filter);

  const contactsList = findedContacts.map(({ name, id, number }) => (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  ));

  return (
    <ContactsListStyled>
      <ul>{contactsList}</ul>
    </ContactsListStyled>
  );
};
