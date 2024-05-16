import { createAsyncThunk } from '@reduxjs/toolkit'
import { backendURL } from '../constants'

export const registerUser = createAsyncThunk(
    'auth/register',
    async (
        { username, email, password, confirmPassword },
        { rejectWithValue }
    ) => {
        try {
            const request = await fetch(`${backendURL}/users/register`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                }),
            })
            const data = await request.json()
            return {
                payload: data.payload,
                msg: data.msg,
                status: request.status,
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            }
            return rejectWithValue(error.message)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const request = await fetch(`${backendURL}/users/login`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
            const data = await request.json()
            return {
                payload: data.payload,
                msg: data.msg,
                status: request.status,
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            }
            return rejectWithValue(error.message)
        }
    }
)
