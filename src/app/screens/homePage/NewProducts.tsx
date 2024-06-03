import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { AspectRatio, Card, CardOverflow, CssVarsProvider } from "@mui/joy";

import { createSelector } from "reselect";
import { retriveNewProducts, retrivePopularWatches } from "./selector";
import { useSelector } from "react-redux";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR */
const newProductsRetriver = createSelector(
  retriveNewProducts,
  (newProducts) => ({ newProducts })
);

export function NewProducts() {
  const { newProducts } = useSelector(newProductsRetriver);
  return (
    <div className="new-products-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">New Products</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {newProducts.length !== 0 ? (
                newProducts.map((ele: Product) => {
                  const imagePath = `${serverApi}/${ele.productImages[0]}`;
                  const sizeVolume =
                    ele.productCollection === ProductCollection.EARPODS
                      ? ele.productVolume + " mm"
                      : ele.productSize + " size";
                  return (
                    <Card key={ele._id} variant="outlined" className="card">
                      <CardOverflow>
                        <div className="product-sale">{sizeVolume}</div>
                        <AspectRatio ratio="1">
                          <img src={imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                          <Stack flexDirection={"row"}>
                            <Typography className="title">
                              {ele.productName}
                            </Typography>
                            <Typography className="price">
                              ${ele.productPrice}
                            </Typography>
                          </Stack>
                          <Stack>
                            <Typography className="views">
                              {ele.productViews}
                              <VisibilityIcon
                                sx={{
                                  fontSize: 20,
                                  marginLeft: "5px",
                                }}
                              />
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New products are not available</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
