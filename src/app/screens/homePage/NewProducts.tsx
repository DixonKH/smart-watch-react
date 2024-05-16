import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { AspectRatio, Card, CardOverflow, CssVarsProvider } from "@mui/joy";

const listProducts = [
  { productName: "Mobile", imagePath: "/img/perspiciatis-unde.jpg" },
  { productName: "Sports", imagePath: "/img/watch2.jpg" },
  { productName: "Jewellery", imagePath: "/img/watch3.jpg" },
  { productName: "Cameras", imagePath: "/img/watch4.jpg" },
];

export function NewProducts() {
  return (
    <div className="new-products-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">New Products</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {listProducts.map((ele, index) => {
                return (
                  <Card key={index} variant="outlined" className="card">
                    <CardOverflow>
                      <div className="product-sale">New</div>
                      <AspectRatio ratio="1">
                        <img src={ele.imagePath} alt="" />
                      </AspectRatio>
                    </CardOverflow>
                    <CardOverflow variant="soft" className="product-detail">
                      <Stack className="info">
                        <Stack flexDirection={"row"}>
                          <Typography className="title">
                            {ele.productName}
                          </Typography>
                          <Typography className="price">$12</Typography>
                        </Stack>
                        <Stack>
                          <Typography className="views">
                            20
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
              })}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
