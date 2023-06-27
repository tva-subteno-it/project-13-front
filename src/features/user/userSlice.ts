import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface UserState {
    jwt: string | null,
    rememberMe?: 'on'
}

const initialState: UserState = {
    jwt: null,
    rememberMe: undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setJwt: (state, action: PayloadAction<UserState>) => {
            state.jwt = action.payload.jwt
            state.rememberMe = action.payload.rememberMe
        }
    }
})

export const {setJwt} = userSlice.actions

export default userSlice.reducer