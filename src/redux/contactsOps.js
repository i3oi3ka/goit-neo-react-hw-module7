import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6838b6336561b8d882ae0415.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios("contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (props, thunkAPI) => {
    try {
      const { data } = await axios.post("contacts", props);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (props, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${props}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
