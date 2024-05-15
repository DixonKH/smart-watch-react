import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
export function OtherNavbar() {
  const authMemeber = null;
  return (
    <div className="other-navbar">
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
              <NavLink to={"/"}>Home</NavLink>
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
              <NavLink to={"/about"} activeClassName={"underline"}>
                About
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
      <div className="navbar-img"></div>
    </div>
  );
}
