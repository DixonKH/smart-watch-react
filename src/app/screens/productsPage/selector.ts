import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";
import { ProductsPage } from ".";
export { createSelector } from "reselect";

const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retriveAdmin = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.admin
);

export const retriveChosenProduct = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.chosenProduct
);

export const retriveProducts = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.products
);
