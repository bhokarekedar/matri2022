import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserpi } from "./authApi";

const initialState = {
  data: [],
  registeredAuthUserInfo: {},
  loggedAuthUserInfo: {},
  isLoggedIn: false,
  isLoading: true,
  registerauthUserState: "idle",
};

const authSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    isLoggedIn(state) {
      state.isLoggedIn = true;
    },
  },
});
export const { isLoggedIn } = authSlice.actions;
export default authSlice.reducer;
