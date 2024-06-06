import {
  Badge,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { Product } from "../../../lib/types/product";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { retriveProducts } from "./selector";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriver = createSelector(retriveProducts, (products) => ({
  products,
}));

export default function Products() {
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriver);
  const [sort, setSorts] = React.useState("");

  useEffect(() => {
    const product = new ProductService();
    product
      .getproducts({
        order: "createdAt",
        page: 1,
        limit: 8,
        productCollection: ProductCollection.APPLE_WATCH,
        search: "",
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setSorts(event.target.value);
  };
  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar-big-box">
            <Stack className="top-text">Smartwatch Products</Stack>
          </Stack>

          <Stack className="watches-filter-section">
            <Stack className="watches-filter-box">
              <Stack>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Sort By</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={sort}
                    label="Sorting"
                    onChange={handleChange}
                  >
                    <MenuItem className="sorting" value={10}>
                      NEW
                    </MenuItem>
                    <MenuItem className="sorting" value={20}>
                      PRICE
                    </MenuItem>
                    <MenuItem className="sorting" value={30}>
                      VIEWS
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack className="products-search-bar">
                <Stack
                  sx={{
                    p: "2px 0 2px 2px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 336,
                    height: "36px",
                    borderRadius: "25px",
                    gap: "4px",
                  }}
                >
                  <input
                    type={"search"}
                    name={"singleResearch"}
                    className={"single-search-input"}
                    style={{ marginLeft: "1px", flex: 1 }}
                    placeholder={"Type here"}
                    //   value={searchText}
                    //   onChange={(e) => setSearchText(e.target.value)}
                    //   onKeyDown={(e) => {
                    //     if (e.key === "Enter") searchProductHandler();
                    //  }}
                  />
                  <Button className="product-search-btn">
                    <p>SEARCH</p>
                    <SearchIcon sx={{ width: "18px", height: "25px" }} />
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack className="list-category-section">
            <Stack className="product-wrapper">
              {products.length !== 0 ? (
                products.map((product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.EARPODS
                      ? product.productVolume + " mm"
                      : product.productSize + " size";
                  return (
                    <Stack key={product._id} className="product-card">
                      <Stack
                        className="product-img"
                        sx={{ backgroundImage: `url(${imagePath})` }}
                      >
                        <div className="img-cover"></div>
                        <div className="product-sale">{sizeVolume}</div>
                      </Stack>
                      <Stack className="product-desc">
                        <Box className="product-title">
                          {product.productName}
                        </Box>
                        <Box className="product-monety">
                          <MonetizationOnIcon /> {product.productPrice}
                        </Box>
                      </Stack>
                      <Stack className="product-desc">
                        <Button className="shop-btn">
                          <p>Add to Cart</p>
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button className="view-btn">
                          <Badge
                            badgeContent={product.productViews}
                            color="primary"
                          >
                            <RemoveRedEyeIcon
                              sx={{
                                color:
                                  product.productViews === 0
                                    ? "white"
                                    : "#44adca",
                              }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available!</Box>
              )}
            </Stack>
            <Stack className="product-category">
              <div className="category-filter-box">
                <Button color="primary" className="order">
                  APPLE WATCH
                </Button>
                <Button color="secondary" className="order">
                  SAMSUNG WATCH
                </Button>
                <Button color="secondary" className="order">
                  XIAOMI WATCH
                </Button>
                <Button color="secondary" className="order">
                  AIR BUDS
                </Button>
                <Button color="secondary" className="order">
                  OTHER
                </Button>
              </div>
            </Stack>
          </Stack>

          <Stack className="pagination-section">
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"primary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>
      <div className="address">
        <Container>
          <Stack className="address-area">
            <Box className="title">Our Address</Box>
            <iframe
              style={{ marginTop: "60px", border: "0" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1545218.9580562941!2d69.17473812214197!3d40.849796953841945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb831071d62ee3%3A0xdf1683533bad3598!2sRayhon%20Milliy%20Taomlari!5e0!3m2!1sen!2skr!4v1712216285884!5m2!1sen!2skr"
              width="100%"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
