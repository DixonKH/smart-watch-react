import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";

export { createSelector } from "reselect";

const selectHomePage = (state: AppRootState) => state.homePage;
export const retrivePopularWatches = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularWatches
);

export const retriveNewProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newProducts
);

export const retriveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);
