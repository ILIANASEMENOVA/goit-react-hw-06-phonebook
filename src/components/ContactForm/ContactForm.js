import { useState } from 'react';
import FormStyle from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact, getContacts } from 'redux/contactsSlice';

export default function PokemonInfo() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const addContactFoo = contact => {
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${contact.name} is already in contacts`);
      return isExist;
    }

    const newContact = {
      id: nanoid(),
      ...contact,
    };

    dispatch(addContact(newContact));
  };

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error('error');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = addContactFoo({ name, number });
    if (!isExist) reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </FormStyle>
  );
}
