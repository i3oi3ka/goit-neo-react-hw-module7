import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const handleFullfield = (state) => {
  state.loading = false;
  state.error = null;
};

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(
          (contact) => contact.id !== payload.id
        );
      })
      .addMatcher(({ type }) => type.endsWith("/pending"), handlePending)
      .addMatcher(({ type }) => type.endsWith("/rejected"), handleRejected)
      .addMatcher(({ type }) => type.endsWith("/fulfilled"), handleFullfield);
  },
});

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const contactsReducer = contactSlice.reducer;
