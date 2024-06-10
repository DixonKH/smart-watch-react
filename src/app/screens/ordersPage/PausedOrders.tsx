import { Box, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { Order, OrderItem } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

/** REDUX SELECTOR */
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

export function PausedOrders() {
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
  return (
    <Stack className="container-stack">
      {pausedOrders?.map((order: Order) => {
        return (
          <Box key={order._id} className={"order-main-box"}>
            <Box className={"order-box-scroll"}>
              {order?.orderItems?.map((item: OrderItem) => {
                const product: Product = order.productData.filter(
                  (ele: Product) => item.productId === ele._id
                )[0];
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                return (
                  <Box key={item._id} className={"orders-name-price"}>
                    <Box className={"orders-name"}>
                      <img src={imagePath} className={"order-watch-img"} />
                      <p className="title-watch">{product.productName}</p>
                    </Box>
                    <Box className={"price-box"}>
                      <p>${item.itemPrice}</p>
                      <img src={"/icons/close.svg"} />
                      <p>{item.itemQuantity}</p>
                      <img src={"/icons/pause.svg"} />
                      <p style={{ marginLeft: "5px" }}>
                        ${item.itemQuantity * item.itemPrice}
                      </p>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            <Box className={"total-price-box"}>
              <Box className={"box-total"}>
                <p>Product price</p>
                <p>${order.orderTotal - order.orderDelivery}</p>
                <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                <p>Delivery cost</p>
                <p>${order.orderDelivery}</p>
                <img src={"/icons/pause.svg"} style={{ marginLeft: "20px" }} />
                <p>Total:</p>
                <p>${order.orderTotal}</p>
              </Box>
            </Box>
            <Box className={"total-price-btn"}>
              <Button className="cancel-button">CANCEL</Button>
              <Button className="pay-button">PAYMENT</Button>
            </Box>
          </Box>
        );
      })}

      {!pausedOrders ||
        (pausedOrders.length === 0 && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
            />
          </Box>
        ))}
    </Stack>
  );
}
