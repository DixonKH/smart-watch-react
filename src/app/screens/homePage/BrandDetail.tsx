import React from "react";
import { Box, Container, Stack } from "@mui/material";
export function BrandDetail() {
  return (
    <div>
      <Container className="detail-container">
        <Stack className="detail-info">
          <Box className="detail-box">
            <h4>BEST DEAL</h4>
            <p>
              Edje to edje full
              <br /> screen coverage
            </p>
          </Box>
        </Stack>
        <Stack className="detail-info1">
          <Box className="detail-box">
            <h4>NEW ARRIVAL</h4>
            <p>
              Best carbon pollynet
              <br /> belt with smart dial
            </p>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
