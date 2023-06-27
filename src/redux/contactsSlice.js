import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(addContact.pending, (state) => state.isLoading = true)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(deleteContact.pending, (state) => state.isLoading = true)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = state.list.filter(contact => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
     
  },
});


export default contactsSlice.reducer;
