// src/features/countriesSlice.js  
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import BASE_URL from '../constants/baseURL';  

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {  
    const response = await fetch(`${BASE_URL}/all`);  
    const data = await response.json();
    console.log(data); // Tambahkan ini untuk melihat data yang diterima  
    return data.map(country => ({  
        name: country.name.common,  
        population: country.population,  
        cca2: country.cca2,  
    }));  
});  

const countriesSlice = createSlice({  
    name: 'countries',  
    initialState: {  
        countries: [],  
        loading: false,  
        error: null,  
    },  
    reducers: {},  
    extraReducers: (builder) => {  
        builder  
            .addCase(fetchCountries.pending, (state) => {  
                state.loading = true;  
            })  
            .addCase(fetchCountries.fulfilled, (state, action) => {  
                state.loading = false;  
                state.countries = action.payload;  
            })  
            .addCase(fetchCountries.rejected, (state, action) => {  
                state.loading = false;  
                state.error = action.error.message;  
            });  
    },  
});  

export default countriesSlice.reducer;