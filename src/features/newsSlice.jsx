// src/features/newsSlice.js  
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {  
    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=peace&api-key=${import.meta.env.VITE_NEWS_API_KEY}`);  
    
    if (!response.ok) {  
        throw new Error('Network response was not ok');  
    }  

    const data = await response.json();  
    console.log(data); 
    return data.response.docs; 
});  

const newsSlice = createSlice({  
    name: 'news',  
    initialState: {  
        articles: [],  
        loading: false,  
        error: null,  
    },  
    reducers: {},  
    extraReducers: (builder) => {  
        builder  
            .addCase(fetchNews.pending, (state) => {  
                state.loading = true;  
            })  
            .addCase(fetchNews.fulfilled, (state, action) => {  
                state.loading = false;  
                state.articles = action.payload;  
            })  
            .addCase(fetchNews.rejected, (state, action) => {  
                state.loading = false;  
                state.error = action.error.message;  
            });  
    },  
});  

export default newsSlice.reducer;