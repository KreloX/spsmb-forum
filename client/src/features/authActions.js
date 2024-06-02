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
                    username,
                    email,
                    password,
                    confirmPassword,
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
                body: JSON.stringify({ username, password }),
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

export const requestReset = createAsyncThunk(
    'auth/request-reset',
    async ({ username, domain }, { rejectWithValue }) => {
        try {
            const request = await fetch(`${backendURL}/users/request-reset`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'PUT',
                body: JSON.stringify({ username, domain }),
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

export const resetPassword = createAsyncThunk(
    'auth/reset-password',
    async ({ token, password, confirmPassword }, { rejectWithValue }) => {
        try {
            const request = await fetch(`${backendURL}/users/reset-password`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'PUT',
                body: JSON.stringify({ token, password, confirmPassword }),
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

export const validateToken = createAsyncThunk(
    'auth/validate-token',
    async ({ username, authToken }, { rejectWithValue }) => {
        try {
            const request = await fetch(`${backendURL}/users/validate-token`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ username, authToken }),
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
