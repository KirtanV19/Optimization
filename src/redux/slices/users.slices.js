import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/clientt";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.USERS.getAll(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  users: {
    data: [],
    loading: false,
  },
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.users.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users.loading = false;
        state.users.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        if (axios.isCancel(action.payload)) {
          return;
        }
        state.users.loading = false;
      });
  },
});

export default users.reducer;
