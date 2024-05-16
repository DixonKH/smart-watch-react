import React from "react";
import { Container, Stack } from "@mui/material";
import { AdSwiper } from "./AdSwiper";

import "swiper/css";
import "swiper/css/pagination";

export function Advertisement() {
  return (
    <div className="adv-div">
      <Container className="adv-container">
        <Stack className="adv-header">
          <h3>Find Things You'll Love</h3>
        </Stack>
        <Stack className="adv-carusel">
          <AdSwiper />
        </Stack>
      </Container>
    </div>
  );
}
