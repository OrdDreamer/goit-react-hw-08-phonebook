import axios from 'axios';

axios.defaults.baseURL = 'https://64122726f9fe8122ae1e3df5.mockapi.io/';

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
  getAllContacts,
  addContact,
  deleteContact,
}

export default API;
