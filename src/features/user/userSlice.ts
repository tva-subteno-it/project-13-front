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

export const loginWithToken = createAsyncThunk(
    'user/loginWithToken',
    fetchProfile
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
        })
        builder.addCase(loginWithToken.rejected, (state) => {
            state.token = null
            state.rememberMe = undefined
            state.isConnected = false
            state.error = null
            state.isLoading = false
            state.isWrongToken = true
        })
        builder.addCase(loginWithToken.pending, (state) => {
            state.isLoading = true
            state.isWrongToken = false
        })
        builder.addCase(editNameAction.fulfilled, (state, action: PayloadAction<UserState>) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        })
    }
})

export const { disconnect, setFormError} = userSlice.actions

export default userSlice.reducer