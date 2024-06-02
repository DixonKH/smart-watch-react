import React, { useEffect } from "react";
import { BrandDetail } from "./BrandDetail";
import { PopularWatches } from "./PopularWatches";
import { NewProducts } from "./NewProducts";
import { Testimonal } from "./Testimonal";
import { Advertisement } from "./Advertisement";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularWatches } from "./slice";
import { retrivePopularWatches } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularWatches: (data: Product[]) => dispatch(setPopularWatches(data)),
});

const popularWatchesRetriver = createSelector(
  retrivePopularWatches,
  (popularWatches) => ({ popularWatches })
);

export function HomePage() {
  const { setPopularWatches } = actionDispatch(useDispatch());
  const { popularWatches } = useSelector(popularWatchesRetriver);

  useEffect(() => {}, []);

  return (
    <div className="homepage">
      <BrandDetail />
      <Advertisement />
      <PopularWatches />
      <NewProducts />
      <Testimonal />
    </div>
  );
}
