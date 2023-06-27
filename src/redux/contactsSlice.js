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
      .addCase(fetchContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.list = payload;
      })
      .addCase(fetchContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.list.push(payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.list.findIndex(
          contact => contact.id === action.payload.id
        );
        state.list.splice(index, 1);
      })

      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default contactsSlice.reducer;
