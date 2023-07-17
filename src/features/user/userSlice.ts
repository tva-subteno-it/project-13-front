import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchProfile} from "../../utils/fetchProfile.ts";
import {editNameAction, signInAction} from "./userAction.tsx";

export interface UserState {
    token: string | null,
    rememberMe?: 'on',
    isConnected: boolean,
    error: string | null,
    isLoading: boolean,
    isWrongToken: boolean,
    firstName?: string,
    lastName?: string,
}

const initialState: UserState = {
    token: null,
    rememberMe: undefined,
    isConnected: false,
    error: null,
    isLoading: false,
    isWrongToken: false,
    firstName: undefined,
    lastName: undefined,
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

export const loginWithToken = createAsyncThunk(
    'user/loginWithToken',
    async (token: string) => {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(response)
        if (response.ok){
            return token
        } else{
            throw new Error('Invalid token')
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        disconnect: (state) => {
            state.token = null
            state.rememberMe = undefined
            state.isConnected = false
        },
        setFormError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signInAction.fulfilled, (state, action: PayloadAction<UserState>) => {
            state.token = action.payload.token
            state.rememberMe = action.payload.rememberMe
            state.isConnected = true
            state.error = null
            state.isLoading = false
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            if (action.payload.rememberMe) {
                window.localStorage.setItem('token', action.payload.token as string)
            } else {
                window.localStorage.removeItem('token')
            }
        })
        builder.addCase(signInAction.rejected, (state) => {
            state.token = null
            state.rememberMe = undefined
            state.isConnected = false
            state.error = 'Email ou mot de passe incorrect'
            state.isLoading = false
        })
        builder.addCase(signInAction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginWithToken.fulfilled, (state, action: PayloadAction<UserState>) => {
            state.isConnected = true
            state.isLoading = false
            state.isWrongToken = false
            state.token = action.payload.token
            state.rememberMe = 'on'
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            console.log('fulfilled')
        })
        builder.addCase(loginWithToken.rejected, (state) => {
            console.log('rejected')
            state.token = null
            state.rememberMe = undefined
            state.isConnected = false
            state.error = null
            state.isLoading = false
            state.isWrongToken = true
        })
        builder.addCase(loginWithToken.pending, (state) => {
            console.log('pending')
            state.isLoading = true
            state.isWrongToken = false
        })
    }
})

export const {setToken, disconnect, setFormError} = userSlice.actions

export default userSlice.reducer