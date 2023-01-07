import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userInfoApi, getAllUsersApi } from "./userApi";

const initialState = {
  userInfo: {},
  allUserInfo: {},
  hasError: false,
  errorMessage: null,
  userInfoState: "idle",
  allUserInfoState: "idle"
};
export const userInfo = createAsyncThunk("userInfo/fetchUserInfo", async () => {
  const response = await userInfoApi();
  return response;
});

export const allUserInfo = createAsyncThunk("userInfo/fetAllUsers", async (pageNumber) => {
  const response = await getAllUsersApi(pageNumber);
  console.log(response);
  return response;
});

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [userInfo.pending]: (state, action) => {

      state.userInfoState = "pending";
    },
    [userInfo.fulfilled]: (state, action) => {
      if (action.payload.status == 200) {
        state.userInfo = action.payload.data;
        state.hasError = false;
        state.errorMessage = null;
        state.userInfoState = "fulfilled";
      } else {
        state.userInfoState = "rejected";
        state.hasError = true;
        state.errorMessage = action.payload.data;
      }
    },
    [userInfo.rejected]: (state, action) => {
      state.userInfoState = "rejected";
      state.hasError = true;
      state.errorMessage = action.payload.data;
    },

    //allUserInfo
    [allUserInfo.pending]: (state, action) => {
      state.allUserInfoState = "pending";
    },
    [allUserInfo.fulfilled]: (state, action) => {
      if (action.payload.status == 200) {
        state.allUserInfo = action.payload.data;
        state.hasError = false;
        state.errorMessage = null;
        state.allUserInfoState = "fulfilled";
      } else {
        state.allUserInfoState = "rejected";
        state.hasError = true;
        state.errorMessage = action.payload.data;
      }
    },
    [allUserInfo.rejected]: (state, action) => {
      state.allUserInfoState = "rejected";
      state.hasError = true;
      state.errorMessage = action.payload.data;
    },
  },
});

export default userInfoSlice.reducer;
