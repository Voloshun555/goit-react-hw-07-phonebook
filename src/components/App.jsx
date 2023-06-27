import { ContactList } from './contactList/contactList';
import { Filter } from './Filter/Filter';

import ContactForm from './contactForm/contactForm';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchContact } from 'redux/operations';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    
    <div className={css.appDiv}>
      
      <ContactForm />
      <Filter />

      <ContactList />
    </div>
  );
}

export default App;
