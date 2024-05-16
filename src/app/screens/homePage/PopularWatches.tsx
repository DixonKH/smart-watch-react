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

const list = [
  { productName: "Mobile", imagePath: "/img/perspiciatis-unde.jpg" },
  { productName: "Sports", imagePath: "/img/watch2.jpg" },
  { productName: "Jewellery", imagePath: "/img/watch3.jpg" },
  { productName: "Cameras", imagePath: "/img/watch4.jpg" },
  { productName: "Fashion", imagePath: "/img/watch5.jpg" },
  { productName: "Men", imagePath: "/img/watch6.jpg" },
  { productName: "Formal", imagePath: "/img/watch7.jpg" },
  { productName: "Nature", imagePath: "/img/watch8.jpg" },
];

export function PopularWatches() {
  return (
    <div className="popular-watches-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Featured Collection</Box>
          <Stack className="cards-frame">
            {list.map((ele, index) => {
              return (
                <CssVarsProvider key={index}>
                  <Card className={"card"}>
                    <CardCover>
                      <img src={ele.imagePath} className="card-img" alt="" />
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
                          20
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
                        The best watches
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
