import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllUsersData } from './getAllUsersApi'

const initialState = {
    data: [],
    userInfo: {},
    isLoading: true,
}

export const fetchGetAllUsers = createAsyncThunk(
  "getAllUsersData/fetchGetAllUsers",
  async () => {
      const response = await getAllUsersData();
      return response.data
  }
)
const getAllUsersSlice = createSlice({
    name: 'getAllUsersData',
    initialState,
    reducers: {
        FetchUsers: (state, action) => {
            state.data = action.payload
        },
        FetchUser: (state, action) => {
            state.userInfo = action.payload
        },
    },
})

export const { FetchUsers, FetchUser } = getAllUsersSlice.actions;

export default getAllUsersSlice.reducer