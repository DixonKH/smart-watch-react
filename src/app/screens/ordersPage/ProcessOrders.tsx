import { Box, Button, Container, Stack } from "@mui/material";
import moment from "moment";

export function ProcessOrders() {
  return (
    <Stack className="container-stack">
      {[1, 2, 3, 4].map((ele, index) => {
        return (
          <Box key={index} className={"order-main-box"}>
            <Box className={"order-box-scroll"}>
              {[1, 2, 3, 4].map((ele2, index2) => {
                return (
                  <Box key={index2} className={"orders-name-price"}>
                    <Box className={"orders-name"}>
                      <img
                        src={"/img/7_thumb.jpg"}
                        className={"order-watch-img"}
                      />
                      <p className="title-watch">APPLE WATCH</p>
                    </Box>
                    <Box className={"price-box"}>
                      <p>$9</p>
                      <img src={"/icons/close.svg"} />
                      <p>2</p>
                      <img src={"/icons/pause.svg"} />
                      <p style={{ marginLeft: "5px" }}>$24</p>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            <Box className={"total-price-box"}>
              <Box className={"box-total"}>
                <p>Product price</p>
                <p>$60</p>
                <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                <p>delivery cost</p>
                <p>$5</p>
                <img src={"/icons/pause.svg"} style={{ marginLeft: "20px" }} />
                <p>Total:</p>
                <p>$65</p>
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

      {false && (
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
          <img
            src={"/icons/noimage-list.svg"}
            style={{ width: 300, height: 300 }}
          />
        </Box>
      )}
    </Stack>
  );
}
