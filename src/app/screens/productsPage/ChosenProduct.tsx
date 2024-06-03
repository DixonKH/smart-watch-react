import { Badge, Box, Button, Rating, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setAdmin, setChosenProduct, setProducts } from "./slice";
import { Product } from "../../../lib/types/product";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { retriveAdmin, retriveChosenProduct } from "./selector";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setAdmin: (data: Member[]) => dispatch(setAdmin(data)),
  setChosenProduct: (data: Product[]) => dispatch(setChosenProduct(data)),
});

const chosenProductRetriver = createSelector(
  retriveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);
const adminRetriver = createSelector(retriveAdmin, (admin) => ({
  admin,
}));

const slideImages = [
  { productName: "Mobile", imagePath: "/img/perspiciatis-unde.jpg" },
  { productName: "Sports", imagePath: "/img/watch2.jpg" },
  { productName: "Jewellery", imagePath: "/img/watch3.jpg" },
  { productName: "Cameras", imagePath: "/img/watch4.jpg" },
  { productName: "Fashion", imagePath: "/img/watch5.jpg" },
  { productName: "Men", imagePath: "/img/watch6.jpg" },
  { productName: "Formal", imagePath: "/img/watch7.jpg" },
  { productName: "Nature", imagePath: "/img/watch8.jpg" },
];

export default function ChosenProduct() {
  const { chosenProduct } = useSelector(chosenProductRetriver);
  const { admin } = useSelector(adminRetriver);
  return (
    <div className="chosen-product">
      <div className="chosen-product-frame">
        <Stack className="product-img">
          <Box>
            <img src="/img/watch9.jpg" alt="" />
          </Box>
          <Box className="product-img-swiper">
            <Swiper
              direction={"vertical"}
              slidesPerView={3}
              spaceBetween={15}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {slideImages.map((img, index) => {
                return (
                  <SwiperSlide key={index} className="slide-img">
                    <img src={img.imagePath} alt={img.productName} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Stack>
        <Stack className="product-detail">
          <Stack className="product-title">PRODUCT DETAIL</Stack>
          <Stack className="product-rating">
            <Box className="rating-box">
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Box>
            <Button className="view-btn">
              <Badge badgeContent={15} color="primary">
                <RemoveRedEyeIcon
                  sx={{
                    color: 20 ? "white" : "grey",
                  }}
                />
              </Badge>
            </Button>
          </Stack>
          <Stack className="product-info">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              recusandae ex autem quam temporibus natus sint, doloribus maxime
              omnis.
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </p>
          </Stack>
          <Stack className={"product-price"}>
            <span>Price:</span>
            <span>$15</span>
          </Stack>
          <Button className="card-btn">ADD TO CART</Button>
        </Stack>
        <div className="cencel-btn">
          <img src={"/icons/cancel.svg"} alt="" />
        </div>
      </div>
    </div>
  );
}
