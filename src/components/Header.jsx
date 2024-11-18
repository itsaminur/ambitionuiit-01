import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";
import StoreIcon from "@mui/icons-material/Store";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1f2937" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          Logo
        </Typography>

        {/* Center: Menu List */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            justifyContent: "center",
            position: { xs: "fixed", sm: "initial" },
            bottom: { xs: "0", sm: "initial" },
            background: { xs: "#1f2937", sm: "" },
            left: { xs: "0", sm: "initial" },
            padding: 1,
          }}
        >
          {/* Home */}
          <Tooltip title="Home" placement="top">
            <IconButton
              component={Link}
              to="/"
              sx={{ display: { xs: "flex", sm: "none" }, color: "#fff" }}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Button
            component={Link}
            to="/"
            sx={{
              color: "#fff",
              display: { xs: "none", sm: "flex" }, // Show full name on sm and above
            }}
          >
            Home
          </Button>

          {/* Service */}
          <Tooltip title="Service" placement="top">
            <IconButton
              component={Link}
              to="/service"
              sx={{ display: { xs: "flex", sm: "none" }, color: "#fff" }}
            >
              <BuildIcon />
            </IconButton>
          </Tooltip>
          <Button
            component={Link}
            to="/service"
            sx={{
              color: "#fff",
              display: { xs: "none", sm: "flex" }, // Show full name on sm and above
            }}
          >
            Service
          </Button>

          {/* About */}
          <Tooltip title="About" placement="top">
            <IconButton
              component={Link}
              to="/about"
              sx={{ display: { xs: "flex", sm: "none" }, color: "#fff" }}
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: "#fff",
              display: { xs: "none", sm: "flex" }, // Show full name on sm and above
            }}
          >
            About
          </Button>

          {/* Product */}
          <Tooltip title="Product" placement="top">
            <IconButton
              component={Link}
              to="/product"
              sx={{ display: { xs: "flex", sm: "none" }, color: "#fff" }}
            >
              <StoreIcon />
            </IconButton>
          </Tooltip>
          <Button
            component={Link}
            to="/product"
            sx={{
              color: "#fff",
              display: { xs: "none", sm: "flex" }, // Show full name on sm and above
            }}
          >
            Product
          </Button>

          {/* Content */}
          <Tooltip title="Content" placement="top">
            <IconButton
              component={Link}
              to="/content"
              sx={{ display: { xs: "flex", sm: "none" }, color: "#fff" }}
            >
              <ContactMailIcon />
            </IconButton>
          </Tooltip>
          <Button
            component={Link}
            to="/content"
            sx={{
              color: "#fff",
              display: { xs: "none", sm: "flex" }, // Show full name on sm and above
            }}
          >
            Content
          </Button>
        </Box>

        {/* Right: Help Button */}
        <Button
          variant="contained"
          sx={{ backgroundColor: "#f59e0b", color: "#fff" }}
        >
          Help
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
