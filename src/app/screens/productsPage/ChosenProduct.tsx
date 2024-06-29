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
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import MemberService from "../../services/MemberService";
import { CartItem } from "../../../lib/types/search";

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

interface ChosenProductProps {
  onAdd: (item: CartItem) => void;
}

export default function ChosenProduct(props: ChosenProductProps) {
  const { onAdd } = props;
  const { setAdmin, setChosenProduct } = actionDispatch(useDispatch());
  const { productId } = useParams<{ productId: string }>();
  const { chosenProduct } = useSelector(chosenProductRetriver);
  const { admin } = useSelector(adminRetriver);
  const navigate = useHistory();

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
  /** HANDLER */
  const handleCancel = () => {
    navigate.push("/products");
  };

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
          <Button
            className="card-btn"
            onClick={(e) => {
              onAdd({
                _id: chosenProduct._id,
                quantity: 1,
                name: chosenProduct.productName,
                price: chosenProduct.productPrice,
                image: chosenProduct.productImages[0],
              });
              e.stopPropagation();
            }}
          >
            ADD TO CART
          </Button>
        </Stack>
        <div className="cencel-btn" onClick={handleCancel}>
          <img src={"/icons/cancel.svg"} alt="" />
        </div>
      </div>
    </div>
  );
}
