import { createSlice, createAction } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    userInfo: {}
}

const user = createSlice({
    name: 'user',
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

export const { FetchUsers, FetchUser } = user.actions;

export default user.reducer