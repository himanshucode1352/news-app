import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  news: [],
  newsDetail: [],
  favourate:[],
  status: "idle",
  error: null
};

export const newsFetch = createAsyncThunk("note/notesFetch", async (user) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=e0b000e5c8fd4115af614be4a340b966`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const fetchedData = await response.json();

    console.log('hyyyyyyy', fetchedData);

    return fetchedData.articles;
  } catch (error) {
    console.log(error,'errrrrrrrrrrroooooooo')
    throw error;
  }
});



export const newsDetail = createAsyncThunk("news/newsDetail", async (id) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=e0b000e5c8fd4115af614be4a340b966&q=${articleId}`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const fetchedData = await response.json();
  
      console.log('hyyy12131213121211yyyy', fetchedData);
  
      return fetchedData.articles;
    } catch (error) {
      console.log(error,'errrrrrrrrrrroooooooo')
      throw error;
    }
  });

export const newsSlice = createSlice({
  name: "newss",
  initialState,
  reducers: {},
  extraReducers: {
    [newsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [newsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.news = action.payload;
      
    },
    [newsFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [newsDetail.pending]: (state, action) => {
        state.status = "pending";
      },
      [newsDetail.fulfilled]: (state, action) => {
        state.status = "success";
        state.newsDetail = action.payload;
        
      },
      [newsDetail.rejected]: (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      },
  },
});

export default newsSlice.reducer;
