import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from "@material-ui/core";
import { MenuRounded, ShoppingCartRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";


function TopBar() {
const {state,dispatcher} = useContext(GlobalContext);
return(
    <AppBar
      className="appbar"
      elevation={0}
      position="relative"
      color="transparent"
    >
      <Toolbar className="topbar_toolbar">
        <IconButton
          color="inherit"
          onClick={() => dispatcher({ type: "toggleDrawer" })}
        >
          <MenuRounded />
        </IconButton>
        <Link to="/">
          <Typography className="brandName" variant="h5">
            The Shoe Store
          </Typography>
        </Link>
        <Link to="/cart">
          <IconButton>
            <Badge
              badgeContent={Object.values(state.cart).length}
              color="secondary"
            >
              <ShoppingCartRounded />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
);
}

export default TopBar;