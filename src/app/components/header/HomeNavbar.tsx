import { Box, Button, Container, Stack } from "@mui/material";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlidePage from "./SlidePage";
import { NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  // setSignupOpen: (isOpen: boolean) => void;
  // setLoginOpen: (isOpen: boolean) => void;
  // anchorEl: HTMLElement | null;
  // handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  // handleCloseLogout: () => void;
  // handleLogoutResquest: () => void;
}

export function HomeNavbar(props: HomeNavbarProps) {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;
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
            <Box className={"left-navbar"}>
              <Box className={"home-search-btn"}>
                <SearchIcon />
              </Box>
              <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
                onDeleteAll={onDeleteAll}
              />
              {!authMemeber ? (
                <Box className={"login-button"}>
                  <PersonIcon className={"login-icon"} />
                </Box>
              ) : (
                <img
                  className={"user"}
                  src={"/icons/l"}
                  aria-haspopup={"true"}
                />
              )}
            </Box>
          </Stack>
        </Stack>
      </Container>
      <div className="carusel">
        <SlidePage />
      </div>
    </div>
  );
}
