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
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";
import MemberService from "../../services/MemberService";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setAdmin: (data: Member) => dispatch(setAdmin(data)),
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
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
  const { productId } = useParams<{ productId: string }>();
  const { setAdmin, setChosenProduct } = actionDispatch(useDispatch());
  const { chosenProduct } = useSelector(chosenProductRetriver);
  const { admin } = useSelector(adminRetriver);

  useEffect(() => {
    const product = new ProductService();
    product
      .getProduct(productId)
      .then((data) => setChosenProduct(data))
      .catch((err) => console.log(err));

    const member = new MemberService();
    member
      .getAdmin()
      .then((data) => setAdmin(data))
      .catch((err) => console.log(err));
  }, []);

  if (!chosenProduct) return null;
  const imagePath = `${serverApi}/${chosenProduct.productImages[0]}`;
  return (
    <div className="chosen-product">
      <div className="chosen-product-frame">
        <Stack className="product-img">
          <Box>
            <img src={imagePath} alt="" />
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
              {chosenProduct?.productImages.map(
                (ele: string, index: number) => {
                  const imagePath = `${serverApi}/${ele}`;
                  return (
                    <SwiperSlide key={index} className="slide-img">
                      <img src={imagePath} alt={chosenProduct?.productName} />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </Box>
        </Stack>
        <Stack className="product-detail">
          <Stack className="product-title">PRODUCT DETAIL</Stack>
          <Stack className="product-name">{chosenProduct?.productName}</Stack>
          <Stack className="admin-name">{admin?.memberNick}</Stack>
          <Stack className="admin-phone">{admin?.memberPhone}</Stack>
          <Stack className="product-rating">
            <Box className="rating-box">
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Box>
            <Button className="view-btn">
              <Badge badgeContent={chosenProduct?.productViews} color="primary">
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
            </p>
          </Stack>
          <Stack className={"product-price"}>
            <span>Price:</span>
            <span>${chosenProduct?.productPrice}</span>
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
