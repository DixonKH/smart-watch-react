import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

const initialState: HomePageState = {
  popularWatches: [],
  newProducts: [],
  topUsers: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularWatches(state, action) {
      state.popularWatches = action.payload;
    },
    setNewProducts(state, action) {
      state.newProducts = action.payload;
    },
    setTopUsers(state, action) {
      state.topUsers = action.payload;
    },
  },
});

export const { setPopularWatches, setNewProducts, setTopUsers } =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
