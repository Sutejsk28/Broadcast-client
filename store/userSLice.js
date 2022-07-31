import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userToken: null,
    username: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginReducer: (state, {payload})=>{ 
            state.userToken = payload.authticationToken
            state.username = payload.username
        },
        logout: (state)=>{
            state = null
        },
    }
})

export const { loginReducer,logout} = userSlice.actions
export default userSlice.reducer