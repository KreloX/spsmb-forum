import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './authActions'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        success: false,
    },
    reducers: {
        logout: (state) => {
            state.success = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state) => {
            state.success = true
        })
        builder.addCase(loginUser.fulfilled, (state) => {
            state.success = true
        })
    },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
