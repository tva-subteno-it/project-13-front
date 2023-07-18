import type {PayloadAction} from "@reduxjs/toolkit";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Account} from "../../@types";

const initialState: {account: Account[] } = {
    account: []
}

export const getAccounts = createAsyncThunk(
    'account/getAccounts',
    async (token: string): Promise<Account[]> => {
        const response = await fetch('http://localhost:3001/api/v1/user/accounts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        if (response.ok) {
            return await response.json().then((data) => data.body)
        } else {
            return Promise.reject(await response.json())
        }
    }
)

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAccounts.fulfilled, (state, action: PayloadAction<Account[]>) => {
            state.account = action.payload
        })
    }
})

// export const { disconnect, setFormError} = accountSlice.actions

export default accountSlice.reducer