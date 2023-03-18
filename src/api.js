import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const register = async (data) => {
  const result = await axios.post('/users/signup', data);
  return result.data;
};

const logIn = async (data) => {
  const result = await axios.post('/users/login', data);
  return result.data;
};

const logOut = async () => {
  await axios.post('/users/logout');
};

const refreshUser = async () => {
  const { data } = await axios.post('/users/current');
  return data;
};

const getAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

const addContact = async (data) => {
  const result = await axios.post('/contacts', data);
  return result.data;
};

const deleteContact = async (id) => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

const API = {
  register,
  logIn,
  logOut,
  refreshUser,
  getAllContacts,
  addContact,
  deleteContact,
};

export default API;
