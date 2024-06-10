import React, { useEffect, useState } from "react";
import { PausedOrders } from "./PausedOrders";
import { ProcessOrders } from "./ProcessOrders";
import { FinishedOrders } from "./FinishedOrders";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Container, Stack, Tabs } from "@mui/material";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../../css/order.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import { Order, OrderInquiry } from "../../../lib/types/order";
import { useGlobals } from "../../hooks/useGlobals";
import { useHistory } from "react-router-dom";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";

const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function OrdersPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());

  const { orderBuilder, authMember } = useGlobals();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 5,
    orderStatus: OrderStatus.PAUSE,
  });

  useEffect(() => {
    const order = new OrderService();
    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [orderInquiry, orderBuilder]);

  /** HANDLER */

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={"order-page"}>
      <Container className={"order-container"}>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            width: "100%",
            height: "auto",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
            }}
          >
            <Tab
              className="orders-label"
              label="Paused Orders"
              {...a11yProps(0)}
            />
            <Tab
              className="orders-label"
              label="Process Orders"
              {...a11yProps(1)}
            />
            <Tab
              className="orders-label"
              label="Finished Orders"
              {...a11yProps(2)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <PausedOrders setValue={setValue} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProcessOrders setValue={setValue} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FinishedOrders />
          </TabPanel>
        </Box>

        <Stack className={"order-right"}>
          <Stack className={"order-user"}>
            <Box className={"member-box"}>
              <div className={"order-user-img"}>
                <img
                  src={"/icons/default-user.svg"}
                  className={"order-user-avatar"}
                />
                <div className={"order-user-icon-box"}>
                  <img
                    src={"/icons/user-badge.svg"}
                    className={"order-user-prof-img"}
                  />
                </div>
              </div>
            </Box>
            <Box>
              <div className={"order-user-name"}>Dixon</div>
              <div className={"order-user-prof"}>User</div>
            </Box>
            <Box className={"liner"}></Box>
            <Box className={"order-user-address"}>
              <LocationOnIcon className={"order-user-location"} />
              <div className={"order-local-address"}>
                South Korea, Busan, Dongsang-ro
              </div>
            </Box>
          </Stack>
          <Stack className={"order-user-payment"}>
            <Box>
              <input
                className="user-card-num"
                type="input"
                placeholder="Card number: 1234 5678 9123 4567"
              />
            </Box>
            <Box className={"user-card-infos"}>
              <input
                className="user-card-info"
                type="input"
                placeholder="07/24"
              />
              <input
                className="user-card-info"
                type="input"
                placeholder="CVV: 010"
              />
            </Box>
            <Box>
              <input
                className="user-card-num"
                type="input"
                placeholder="Justin Robertson"
              />
            </Box>
            <Box className={"user-payment-options"}>
              <div className="options-cards">
                <img src={"/icons/western-card.svg"} />
              </div>
              <div className="options-cards">
                <img src={"/icons/master-card.svg"} />
              </div>
              <div className="options-cards">
                <img src={"/icons/paypal-card.svg"} />
              </div>
              <div className="options-cards">
                <img src={"/icons/visa-card.svg"} />
              </div>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
