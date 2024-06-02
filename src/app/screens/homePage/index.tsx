import React, { useEffect } from "react";
import { BrandDetail } from "./BrandDetail";
import { PopularWatches } from "./PopularWatches";
import { NewProducts } from "./NewProducts";
import { Testimonal } from "./Testimonal";
import { Advertisement } from "./Advertisement";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularWatches } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularWatches: (data: Product[]) => dispatch(setPopularWatches(data)),
});

export function HomePage() {
  const { setPopularWatches } = actionDispatch(useDispatch());

  useEffect(() => {
    const product = new ProductService();
    product
      .getproducts({
        order: "productViews",
        page: 1,
        limit: 4,
        productCollection: ProductCollection.APPLE_WATCH,
      })
      .then((data) => {
        setPopularWatches(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
