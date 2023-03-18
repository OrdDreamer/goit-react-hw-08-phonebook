import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectSearchQuery = (state) => state.filters.searchQuery;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchQuery],
  (contacts, term) => {
    return !term
      ? contacts
      : contacts.filter(e =>
        e.name.toLowerCase().includes(term.toLowerCase()),
      );
  },
);
