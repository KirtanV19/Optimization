import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/clientt";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "/posts/fetchPosts",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.POSTS.getAll(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const initialState = {
  posts: {
    data: [],
    loading: false,
  },
};
const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.posts.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts.loading = false;
        state.posts.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        if (axios.isCancel(action.payload)) {
          return;
        }
        state.posts.loading = false;
      });
  },
});

export default posts.reducer;
