import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    setAuth(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    clearAuth() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk(
    'auth/register',
    async (userInfo, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/signup', userInfo);
            token.setAuth(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.code);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (userInfo, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/login', userInfo);
            token.setAuth(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.code);
        }
    }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.clearAuth();
        return;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.code);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        token.setAuth(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            toast('User is not found!', {
                icon: '🤷‍♂️',
            });
            return thunkAPI.rejectWithValue(error.code);
        }
    }
);
