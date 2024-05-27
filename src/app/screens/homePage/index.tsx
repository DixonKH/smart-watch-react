import React from "react";
import { BrandDetail } from "./BrandDetail";
import { PopularWatches } from "./PopularWatches";
import { NewProducts } from "./NewProducts";
import { Testimonal } from "./Testimonal";
import { Advertisement } from "./Advertisement";
import "../../../css/home.css";

export function HomePage() {
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
