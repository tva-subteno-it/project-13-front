import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface UserState {
    token: string | null,
    rememberMe?: 'on',
    isConnected: boolean
}

const initialState: UserState = {
    token: null,
    rememberMe: undefined,
    isConnected: false
}

export const signInAction = createAsyncThunk(
    'user/signInAction',
    async ({email, password, rememberMe}: {email: string, password: string, rememberMe: boolean}) => {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        if (response.status === 200) {
            return {...data.body, rememberMe}
        } else {
            throw data
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<UserState>) => {
            state.token = action.payload.token
            state.rememberMe = action.payload.rememberMe
        },
        disconnect: (state) => {
            state.token = null
            state.rememberMe = undefined
            state.isConnected = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signInAction.fulfilled, (state, action: PayloadAction<UserState>) => {
            state.token = action.payload.token
            state.rememberMe = action.payload.rememberMe
            state.isConnected = true
        })
        builder.addCase(signInAction.rejected, (state) => {
            state.token = null
            state.rememberMe = undefined
            state.isConnected = false
        })
    }
})

export const {setToken, disconnect} = userSlice.actions

export default userSlice.reducer