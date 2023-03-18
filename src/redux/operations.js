import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await API.getAllContacts();
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  });

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      return await API.addContact(data);
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await API.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
);
