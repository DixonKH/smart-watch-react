import { BrandDetail } from "./BrandDetail";
import { PopularWatches } from "./PopularWatches";
import { NewProducts } from "./NewProducts";
import { Testimonal } from "./Testimonal";
import { Events } from "./Events";
import { Advertisement } from "./Advertisement";

export function HomePage() {
  return (
    <div className="homepage">
      <BrandDetail />
      <Advertisement />
      <PopularWatches />
      <NewProducts />
      <Testimonal />
      <Events />
    </div>
  );
}
