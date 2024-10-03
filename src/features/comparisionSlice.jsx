// src/features/comparisionSlice.js  
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import BASE_URL from '../constants/baseURL';  

export const fetchCountries = createAsyncThunk('comparision/fetchCountries', async () => {  
    const response = await fetch(`${BASE_URL}/all`);  
    return response.json();  
});  

const comparisionSlice = createSlice({  
    name: 'comparision',  
    initialState: {  
        countries: [],  
        status: 'idle',  
        error: null,  
    },  
    reducers: {},  
    extraReducers: (builder) => {  
        builder  
            .addCase(fetchCountries.pending, (state) => {  
                state.status = 'loading';  
            })  
            .addCase(fetchCountries.fulfilled, (state, action) => {  
                state.status = 'succeeded';  
                state.countries = action.payload;  
            })  
            .addCase(fetchCountries.rejected, (state, action) => {  
                state.status = 'failed';  
                state.error = action.error.message;  
            });  
    },  
});  

export default comparisionSlice.reducer;