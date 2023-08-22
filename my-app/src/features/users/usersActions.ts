import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchUsers } from "./usersAPI"

const fetchAllUsersThunk = createAsyncThunk(
    'users/fetchAll',
   async () => {
        const res = await fetchUsers()
        return res
   }
)


export {fetchAllUsersThunk}