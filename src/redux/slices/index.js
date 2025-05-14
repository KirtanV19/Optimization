import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./users.slices";
import postSlice from "./posts.slices";

const reducers = combineReducers({
  users: userSlice,
  posts: postSlice,
});

export default reducers;
