import { Box, Button, Container, Stack } from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProccessOrders } from "./selector";
import { Order, OrderItem } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

/** REDUX SELECTOR */
const processOrdersRetriever = createSelector(
  retrieveProccessOrders,
  (processOrders) => ({ processOrders })
);

export function ProcessOrders() {
  const { processOrders } = useSelector(processOrdersRetriever);
  return (
    <Stack className="container-stack">
      {processOrders?.map((order: Order) => {
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
                <p className={"data-compl"}>
                  {moment().format("YY-MM-DD HH-mm")}
                </p>
              </Box>
            </Box>
            <Box className={"verify-fulfil"}>
              <Button className="verify-button">VERIFY TO FULFIL</Button>
            </Box>
          </Box>
        );
      })}

      {!processOrders ||
        (processOrders.length === 0 && (
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
