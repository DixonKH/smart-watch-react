import React, { useEffect } from "react";
import { BrandDetail } from "./BrandDetail";
import { PopularWatches } from "./PopularWatches";
import { NewProducts } from "./NewProducts";
import { Testimonal } from "./Testimonal";
import { Advertisement } from "./Advertisement";
import "../../../css/home.css";

export function HomePage() {
  // selector: Data <= Store

  useEffect(() => {
    // Backend server data request  => Data
    // Slice: Data => Store
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
