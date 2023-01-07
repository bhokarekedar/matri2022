import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { registerUserpi } from './authApi'

const initialState = {
    data: [],
    registeredAuthUserInfo: {},
    loggedAuthUserInfo: {},
    isLoading: true,
    registerauthUserState: "idle"
}

export const registerAuthUser = createAsyncThunk(
  "authorization/fetchAuthUser",
  async (data) => {
      const response = await registerUserpi(data);
      console.log(response);
      return response.data
  }
)
const authSlice = createSlice({
    name: 'authorization',
    initialState,
    extraReducers: {
        [registerAuthUser.pending] : (state, action) => {
            state.registerauthUserState = "pending";
        },
        [registerAuthUser.fulfilled] : (state, action) => {
            state.registeredAuthUserInfo = action.payload;
            state.registerauthUserState = "fulfilled";
        },
        [registerAuthUser.rejected] : (state, action) => {
            state.registerauthUserState = "rejected";
        },
    },
})

export default authSlice.reducer
