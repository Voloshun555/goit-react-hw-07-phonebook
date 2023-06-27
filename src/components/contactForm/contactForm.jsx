import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { nanoid } from 'nanoid';
import css from './contactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contactsList = useSelector(selectContactsList);

  const handleSubmitt = e => {
    e.preventDefault();
    setName('');
    setNumber('');
    addContacts({ name, number });
  };

  const addContacts = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    const nameToLowerCase = name.toLowerCase();
    const contacts = contactsList.find(
      contact =>
        contact.name.toLowerCase() === nameToLowerCase ||
        contact.number === number
    );

    if (contacts) {
      alert(`${name} або ${number} вже є в телефонній книзі`);
      return;
    }
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitt}>
        <label className={css.formName}>
          Name
          <input
            className={css.inputTitle}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+([' \-][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
          />
        </label>
        <label className={css.formNumber}>
          Number
          <input
            className={css.inputTitle}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
        </label>

        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </form>
      <h3>Телефонна книга: {contactsList.length}</h3>
    </>
  );
};

export default ContactForm;
