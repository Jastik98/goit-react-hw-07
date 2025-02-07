import { createSlice } from "@reduxjs/toolkit";
import contactData from "../../ContactsData.json"

const contactSlice = createSlice({
  name: "contacts",
  initialState: { items: contactData },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
export const selectContacts = state => state.contacts.items;