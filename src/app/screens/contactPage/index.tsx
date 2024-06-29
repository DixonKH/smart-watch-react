import { Box, Button, Container, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "../../../css/contact.css";
export function ContactPage() {
  return (
    <Container>
      <div className="contact-page">
        <Stack className="right">
          <Stack className="info-title">
            <strong>Store Information</strong>
          </Stack>
          <Stack className="address">
            <Box>
              <LocationOnIcon className="locationIcon" />
            </Box>
            <Box>
              <p>Etrand Smartwatch 130, street Arizona 2000145, United State</p>
            </Box>
          </Stack>
          <Stack className="phone">
            <Box>
              <PhoneIcon className="locationPhone" />
            </Box>
            <Box>
              <p>
                Call us:
                <br /> (+82) 10 9791 8337
              </p>
            </Box>
          </Stack>
          <Stack className="email">
            <Box>
              <EmailIcon className="locationEmail" />
            </Box>
            <Box>
              <p>
                Email us:
                <br /> admin@info.com
              </p>
            </Box>
          </Stack>
        </Stack>
        <Stack className="left">
          <Stack className="info-title">
            <strong>Contact Us</strong>
          </Stack>
          <Stack className="contact-info">
            <Stack className="subject">
              <p>Subject</p>
              <input
                type="text"
                className="subject-input"
                placeholder="Customer Service"
              />
            </Stack>
            <Stack className="email-address">
              <p>Email address</p>
              <input
                type="text"
                className="email-input"
                placeholder="Your@email.com"
              />
            </Stack>
            <Stack className="message">
              <p>Messaage</p>
              <input
                type="text"
                className="message-input"
                placeholder="How can We help?"
              />
            </Stack>
          </Stack>
          <Button variant="contained" color="secondary" className="send-btn">
            Send
          </Button>
        </Stack>
      </div>
    </Container>
  );
}
