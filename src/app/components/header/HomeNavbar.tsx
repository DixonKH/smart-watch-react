import { Box, Button, Container, Stack } from "@mui/material";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlidePage from "./SlidePage";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
  const authMemeber = null;
  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Stack>
            <Box>
              <NavLink to={"/"}>
                <img src="./img/logo.png" alt="logo" />
              </NavLink>
            </Box>
          </Stack>
          <Stack className={"links"}>
            <Box className={"hover-line"}>
              <NavLink to={"/"} activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to={"/products"} activeClassName={"underline"}>
                Products
              </NavLink>
            </Box>
            {authMemeber ? (
              <Box className={"hover-line"}>
                <NavLink to={"/orders"} activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMemeber ? (
              <Box className={"hover-line"}>
                <NavLink to={"/member-page"} activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to={"/help"} activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to={"/contact"} activeClassName={"underline"}>
                Contact Us
              </NavLink>
            </Box>
            {/* Basket  */}
            {!authMemeber ? (
              <Box>
                <Button variant="contained" className={"login-button"}>
                  Login
                </Button>
              </Box>
            ) : (
              <img className={"user"} src={"/icons/l"} aria-haspopup={"true"} />
            )}
          </Stack>
        </Stack>
      </Container>
      <div className="carusel">
        <SlidePage />
      </div>
    </div>
  );
}
