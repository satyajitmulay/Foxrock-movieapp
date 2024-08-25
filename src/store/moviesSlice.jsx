import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannnerData: [],
  imageURL : ""
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannnerData = action.payload;
    },
    setImageURL : (state,action) =>{
        state.imageURL = action.payload
    }
  },
});

export const {setBannerData, setImageURL} = moviesSlice.actions;

export default moviesSlice.reducer;
