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
        builder.addCase(registerUser.fulfilled, (state, payload) => {
            state.success = payload.payload.status == 201
        })
        builder.addCase(loginUser.fulfilled, (state, payload) => {
            state.success = payload.payload.status == 200
        })
    },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
