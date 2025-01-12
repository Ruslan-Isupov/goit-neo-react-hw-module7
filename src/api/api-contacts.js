import axios from "axios";

axios.defaults.baseURL = "https://6783d63b8b6c7a1316f5c75e.mockapi.io";

const contactsResourcePath = "/contacts";

export const fetchContacts = async () => {
  const { data } = await axios.get(contactsResourcePath);
  return data;
};

export const addContact = async ({ name, number }) => {
  const { data } = await axios.post(contactsResourcePath, { name, number });
  return data;
};

export const deleteContact = async (id) => {
  await axios.delete(`${contactsResourcePath}/${id}`);
  return id;
};
