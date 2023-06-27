import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from 'redux/selectors';
import { addContact } from 'redux/operations';
import css from './contactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const dispatch = useDispatch();
  const contactsList = useSelector(selectContactsList);

  const handleSubmitt = e => {
    e.preventDefault();
    setName('');
    setNumber('');
    addContacts({ name, phone });
  };

  const addContacts = ({ name, phone }) => {
    const contact = {name, phone };
    const nameToLowerCase = name.toLowerCase();
    const contacts = contactsList.find(
      contact =>
        contact.name.toLowerCase() === nameToLowerCase ||
        contact.phone === phone
    );

    if (contacts) {
      alert(`${name} або ${phone} вже є в телефонній книзі`);
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
      case 'phone':
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
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
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
