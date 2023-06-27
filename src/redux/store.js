import { configureStore } from '@reduxjs/toolkit';

import contactsSlice from './contactsSlice';
import filterClice from './filterSlice';

export const store = configureStore({
  reducer: { contacts: contactsSlice, filter: filterClice },
});
