// src/app/store.js  
import { configureStore } from '@reduxjs/toolkit';  
import countriesReducer from '../features/countriesSlice';  
import newsReducer from '../features/newsSlice'; 
import comparisionReducer from '../features/comparisionSlice';  

const store = configureStore({  
    reducer: {  
        countries: countriesReducer,  
        news: newsReducer, 
        comparision: comparisionReducer,
    },  
});  

export default store;