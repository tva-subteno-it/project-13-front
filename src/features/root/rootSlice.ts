import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface RootState {
    isConnected: boolean
}

const initialState: RootState = {
    isConnected: false
}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setIsConnected: (state, action: PayloadAction<boolean>) => {
            state.isConnected = action.payload
        }
    }
})

export const {setIsConnected} = rootSlice.actions

export default rootSlice.reducer