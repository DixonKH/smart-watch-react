import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import { createSelector } from "reselect";
import { retrivePopularWatches } from "./selector";
import { useSelector } from "react-redux";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR */
const popularWatchesRetriver = createSelector(
  retrivePopularWatches,
  (popularWatches) => ({ popularWatches })
);

// const list = [
//   { productName: "Mobile", imagePath: "/img/perspiciatis-unde.jpg" },
//   { productName: "Sports", imagePath: "/img/watch2.jpg" },
//   { productName: "Jewellery", imagePath: "/img/watch3.jpg" },
//   { productName: "Cameras", imagePath: "/img/watch4.jpg" },
//   { productName: "Fashion", imagePath: "/img/watch5.jpg" },
//   { productName: "Men", imagePath: "/img/watch6.jpg" },
//   { productName: "Formal", imagePath: "/img/watch7.jpg" },
//   { productName: "Nature", imagePath: "/img/watch8.jpg" },
// ];

export function PopularWatches() {
  const { popularWatches } = useSelector(popularWatchesRetriver);
  return (
    <div className="popular-watches-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Featured Collection</Box>
          <Stack className="cards-frame">
            {popularWatches.length !== 0 ? (
              popularWatches.map((ele: Product) => {
                const imagePath = `${serverApi}/${ele.productImages[0]}`;
                return (
                  <CssVarsProvider key={ele._id}>
                    <Card className={"card"}>
                      <CardCover>
                        <img src={imagePath} className="card-img" alt="" />
                      </CardCover>
                      <CardCover className={"card-cover"} />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Stack
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                        >
                          <Typography
                            level="h2"
                            fontSize="lg"
                            textColor="#fff"
                            mb={1}
                          >
                            {ele.productName}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "mb",
                              color: "#fff",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            {ele.productViews}
                            <VisibilityIcon
                              sx={{
                                fontSize: 25,
                                marginLeft: "5px",
                                color: "#44adca",
                              }}
                            />
                          </Typography>
                        </Stack>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding",
                          borderTop: "1px solid",
                          height: "60px",
                        }}
                      >
                        <Typography
                          startDecorator={<DescriptionOutlinedIcon />}
                          textColor="neutral.300"
                        >
                          {ele.productDesc}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">New products are not available</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
