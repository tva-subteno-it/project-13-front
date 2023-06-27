import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import rootReducer from '../features/root/rootSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        root: rootReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch