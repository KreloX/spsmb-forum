import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser, validateToken } from './authActions'

const authSlice = createSlice({
    name: 'auth',
    initialState: { username: null, authToken: null },
    reducers: {
        logout: (state) => {
            state.username = null
            state.authToken = null
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, payload) => {
            if (payload.payload.status == 201) {
                state.username = payload.payload.payload.username
                state.authToken = payload.payload.payload.authToken
            }
        })
        builder.addCase(loginUser.fulfilled, (state, payload) => {
            if (payload.payload.status == 200) {
                state.username = payload.payload.payload.username
                state.authToken = payload.payload.payload.authToken
            }
        })
        builder.addCase(validateToken.fulfilled, (state, payload) => {
            if (payload.payload.status != 200) {
                state.username = null
                state.authToken = null
            }
        })
    },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
