import { createSlice } from '@reduxjs/toolkit';
import { fetchAllUsersThunk } from './usersActions';


export type userType = {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string,
}
export interface UsersState {
    users: Array<userType>
    status: 'pending' | 'fullfiled' | 'rejected'
    error: string
}

const initialState: UsersState = {
    users: [],
    status: 'pending',
    error: ''
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllUsersThunk.pending, (state)=>{
            state.status = 'pending'
        })
        .addCase(fetchAllUsersThunk.fulfilled, (state, action)=>{
  
            state.users = [...state.users, ...action.payload]
        })
        .addCase(fetchAllUsersThunk.rejected, (state, action)=>{
            console.log(action)
        })
    }
})
export default usersSlice.reducer