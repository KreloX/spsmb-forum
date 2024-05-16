import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './authActions'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state) => {
            state.success = true
        })
        builder.addCase(loginUser.fulfilled, (state) => {
            state.success = true
        })
    },
})

export default authSlice.reducer
