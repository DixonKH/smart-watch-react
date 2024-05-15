import { Box, Container, Stack } from "@mui/material";

export function Footer() {
  return (
    <div className="footer-div">
      <Container className="footer">
        <Stack>
          <Box>
            <p className="footer-headlines">CONTACT</p>
            <Box>
              <h4>ADDRESS</h4>
              <p>
                Etrend Smartwatch <br />
                130 Street, Arizona <br /> 855002 <br /> United States
              </p>
            </Box>
          </Box>
          <Box>
            <h4>MAIL US</h4>
            <p>admin@info.com</p>
          </Box>
          <Box>
            <h4>PHONE</h4>
            <p>(123) 456 7890</p>
          </Box>
        </Stack>
        <Stack>
          <Box>
            <p className="footer-headlines">YOUR ACCOUNT</p>
            <Box>
              <p>Personal Info</p>
              <p>Orders</p>
              <p>Credit slips</p>
              <p>Addresses</p>
            </Box>
          </Box>
        </Stack>
        <Stack>
          <Box>
            <p className="footer-headlines">PRODUCTS</p>
            <Box>
              <p>Price drop</p>
              <p>New products</p>
              <p>Best sales</p>
              <p>Sitemap</p>
              <p>Stores</p>
            </Box>
          </Box>
        </Stack>
        <Stack>
          <Box>
            <p className="footer-headlines">OUR COMPANY</p>
            <Box>
              <p>Delivery</p>
              <p>Legal Notice</p>
              <p>Terms and Conditions of use</p>
              <p>About Us</p>
              <p>Secure payment</p>
              <p>Contact Us</p>
            </Box>
          </Box>
        </Stack>
      </Container>
      <div className="footer-bottom">
        <Container className="footer-cards">
          <Stack>
            <p>2024-Ecommerce software by PrestaShop</p>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
