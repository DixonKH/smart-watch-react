import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface OtherNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setLoginOpen: (isOpen: boolean) => void;
}
export function OtherNavbar(props: OtherNavbarProps) {
  const { cartItems, onAdd, onDelete, onDeleteAll, onRemove, setLoginOpen } =
    props;
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
              <NavLink to={"/contact"} activeClassName={"underline"}>
                Contact Us
              </NavLink>
            </Box>
            <Box className={"left-navbar"}>
              <Box className={"home-search-btn"}>
                <SearchIcon />
              </Box>
              <Box>
                <Basket
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  onDelete={onDelete}
                  onDeleteAll={onDeleteAll}
                />
              </Box>
              {!authMemeber ? (
                <Box className={"login-button"}>
                  <PersonIcon
                    className={"login-icon"}
                    onClick={() => setLoginOpen(true)}
                  />
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
      <div className="navbar-img"></div>
    </div>
  );
}
