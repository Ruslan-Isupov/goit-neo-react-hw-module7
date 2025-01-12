import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from "./contactsThunk";

const setLoader = (state, value) => {
  // state.isLoading = value;

  state.loader = value;
};

const setError = (state, value) => {
  state.error = value;
};

const handleRejected = (state, action) => {
  setError(state, action.payload);
  setLoader(state, false);
};

const handlePending = (state) => {
  setLoader(state, true);
};

const handleFulfilled = (state) => {
  setLoader(state, false);
  setError(state, null);
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.pending, handlePending)
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        handleFulfilled(state);
      })
      .addCase(fetchContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        handleFulfilled(state);
      })
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
        handleFulfilled(state);
      })
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
