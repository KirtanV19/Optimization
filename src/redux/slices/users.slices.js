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

export const createUsers = createAsyncThunk(
  "users/createUsers",
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.USERS.create({ data: user });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.USERS.delete({ id });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUsers = createAsyncThunk(
  "users/updateUsers",
  async (id, data, { rejectWithValue }) => {
    try {
      const response = await api.USERS.update({ id, data });
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
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.users.data = state.users.data.filter(
          (item) => item.id !== action.meta.arg
        );
        console.log(action.meta);
      })
      .addCase(createUsers.fulfilled, (state, action) => {
        state.users.data.push(action.payload);
        console.log(action.payload);
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        const index = state.users.data.findIndex(
          (u) => u.id === action.payload.id
        );
        if (index !== -1) {
          state.users.data[index] = action.payload;
        }
        console.log(action.payload);
      });
  },
});

export default users.reducer;
