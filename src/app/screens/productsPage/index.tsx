import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import { CartItem } from "../../../lib/types/search";
import "../../../css/products.css";

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
}

export function ProductsPage(props: ProductsPageProps) {
  const { onAdd } = props;
  const products = useRouteMatch();
  const [cancel, setCancel] = useState(false);

  /** HANDLER */

  const handleCancel = () => setCancel(false);

  return (
    <div className={"products-page"}>
      <Switch>
        <Route path={`${products.path}`}>
          <Products onAdd={onAdd} />
          <Route path={`${products.path}/:productId`}>
            <ChosenProduct onAdd={onAdd} />
          </Route>
        </Route>
      </Switch>
    </div>
  );
}
