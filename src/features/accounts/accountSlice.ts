import type {PayloadAction} from "@reduxjs/toolkit";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Account, Transaction} from "../../@types";

interface InitialState {
    accounts: Account[],
    transactions: Transaction | undefined,
    categories: {
        _id: string;
        name: string;
    }[],
}

const initialState: InitialState = {
    accounts: [],
    transactions: undefined,
    categories: [],
}

export const getAccounts = createAsyncThunk(
    'account/getAccounts',
    async (token: string): Promise<Account[]> => {
        const response = await fetch('http://localhost:3001/api/v1/account/accounts', {
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
export const getTransactions = createAsyncThunk(
    'account/getTransactions',
    async ({token, account_id}: {token: string, account_id:string}): Promise<Transaction> => {
        const response = await fetch('http://localhost:3001/api/v1/account/transactions' + new URLSearchParams({parent_id: account_id}), {
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

export const getCategories = createAsyncThunk(
    'account/getCategories',
    async (): Promise<{_id: string, name: string}[]> => {
        const response = await fetch('http://localhost:3001/api/v1/account/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            return await response.json().then((data) => data.body)
        } else {
            return Promise.reject(await response.json())
        }
    }
)

export const setCategory = createAsyncThunk(
    'account/setCategory',
    async ({token, transaction_id, category_id}: {token: string, transaction_id:string, category_id: string}): Promise<Transaction> => {
        const response = await fetch('http://localhost:3001/api/v1/account/transactions/categories', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                transaction_id,
                category_id
            })
        })
        if (response.ok) {
            return await response.json().then((data) => data.body)
        } else {
            return Promise.reject(await response.json())
        }
    })

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAccounts.fulfilled, (state, action: PayloadAction<Account[]>) => {
            state.accounts = action.payload
        })
        builder.addCase(getTransactions.fulfilled, (state, action: PayloadAction<Transaction>) => {
            state.transactions = action.payload
        })
        builder.addCase(getCategories.fulfilled, (state, action: PayloadAction<{_id: string, name: string}[]>) => {
            state.categories = action.payload
        })
        builder.addCase(setCategory.fulfilled, (state, action: PayloadAction<Transaction>) => {
            state.transactions = action.payload
        })
    }
})

export default accountSlice.reducer