export const selectContactsList = state => state.contacts.list;
export const selectFilter = ({ filter }) => filter;


// export const getIsLoading = state => state.list.isLoading;
// export const getError = state => state.list.error;

export const getVisibleContacts = ({ contacts: { list }, filter }) => {
  if (!filter) {
    return list;
  }
  const normalizedFilter = filter.toLowerCase();

  return list.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
