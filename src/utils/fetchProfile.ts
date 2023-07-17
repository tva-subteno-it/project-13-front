import {UserState} from "../features/user/userSlice.ts";

export async function fetchProfile(token: string): Promise<UserState> {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    if (response.ok) {
        const data = await response.json()
        return {...data.body, token}
    } else {
        throw new Error('Invalid token')
    }
}