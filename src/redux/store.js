import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSlice';
import { filtersReducer } from './slices/filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;

