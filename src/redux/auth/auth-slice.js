import { createSlice } from '@reduxjs/toolkit';
import {register, logIn} from './auth-operations';

const initialState = {
    user: { name: null, email: null, password:null },
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    //mini-reducer in slice 
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        }
    },
});

export default authSlice.reducer;