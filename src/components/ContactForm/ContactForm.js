// import { Component } from 'react';
import { useState } from 'react';
import FormStyle from './ContactForm.styled';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

export default function PokemonInfo({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

    const isExist = addContact({ name, number });
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
// export class ContactForm extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   handleChange = e => {
//     const { value, name } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const isExist = this.props.addContact(this.state);
//     if (!isExist) this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <FormStyle onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={name}
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Number
//           <input
//             type="tel"
//             name="number"
//             value={number}
//             required
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Add contact</button>
//       </FormStyle>
//     );
//   }
// }
