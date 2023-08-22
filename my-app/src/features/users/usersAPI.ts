import { AxiosError } from 'axios';

import { $HostInstance } from "../../app/api"
import { userType } from "./usersSlice"

const fetchUsers = async () => {
    try {
        const {data} = await $HostInstance.get<userType[]>('users')
        
        return data
    } catch (e) {
        if (e instanceof AxiosError) {
            // TODO :: handle it here
            throw e
        } else {
           throw e
        }
    }   
    
}

export {fetchUsers}