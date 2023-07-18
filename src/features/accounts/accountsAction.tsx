import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchProfile} from "../../utils/fetchProfile.ts";

export const signInAction = createAsyncThunk(
    'user/signInAction',
    async ({email, password, rememberMe}: { email: string, password: string, rememberMe: boolean }) => {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        if (response.status === 200) {
            const token = data.body.token
            const {firstName, lastName} = await fetchProfile(token)
            return {...data.body, rememberMe, firstName, lastName}
        } else {
            throw data
        }
    }
)

export const editNameAction = createAsyncThunk(
    'user/editNameAction',
    async ({firstName, lastName, token}: { firstName: string, lastName: string, token: string }) => {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            body: JSON.stringify({firstName, lastName}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        if (response.status === 200) {
            return data.body
        } else {
            throw data
        }
})