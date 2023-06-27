import { ContactList } from './contactList/contactList';
import { Filter } from './Filter/Filter';

import ContactForm from './contactForm/contactForm';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchContact } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';


function App() {

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    
    <div className={css.appDiv}>
      
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default App;
