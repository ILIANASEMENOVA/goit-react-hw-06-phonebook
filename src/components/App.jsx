import { useEffect, useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';

const getInitialContacts = () => {
  const contacts = JSON.parse(localStorage.getItem('contacts'));
  return contacts !== null ? contacts : [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const findContacts = () => {
    const formatedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(formatedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const addContact = contact => {
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
    setContacts(prevState => [...prevState, newContact]);
  };

  const updateFilter = value => {
    setFilter(value);
  };

  const findedContacts = findContacts();

  const results = findedContacts.length;
  let filterInfo = '';
  if (!results && !filter) filterInfo = <p>Your contact list is empty</p>;
  if (!results && filter) filterInfo = <p>Not Finded</p>;

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} updateFilter={updateFilter} />
      <ContactList contacts={findedContacts} deleteContact={deleteContact} />
      {filterInfo}
    </div>
  );
};

// export class App extends Component {
//   state = {
//     contacts,

//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     // console.log(contacts);
//     if (contacts) {
//       this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   updateState = (option, value) => {
//     this.setState({ [option]: value });
//   };

//   addContact = contact => {
//     const isExist = this.state.contacts.some(
//       ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
//     );
//     if (isExist) {
//       alert(`${contact.name} is already in contacts`);
//       return isExist;
//     }

//     const newContact = {
//       id: nanoid(),
//       ...contact,
//     };
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   findContacts = () => {
//     const { contacts, filter } = this.state;
//     const formatedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(formatedFilter)
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const findedContacts = this.findContacts();

//     const results = findedContacts.length;
//     let filterInfo = '';
//     if (!results && !filter) filterInfo = <p>Your contact list is empty</p>;
//     if (!results && filter) filterInfo = <p>Not Finded</p>;

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm addContact={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter filter={filter} updateState={this.updateState} />
//         <ContactList
//           contacts={findedContacts}
//           deleteContact={this.deleteContact}
//         />
//         {filterInfo}
//       </div>
//     );
//   }
// }
