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
// import InfoIcon from "@mui/icons-material/Info";
import StoreIcon from "@mui/icons-material/Store";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({
  toggleTheme,
  isDarkMode,
  toggleLanguage,
  currentLanguage, // Use currentLanguage here
}) => {
  const content = {
    en: {
      list0: "Home",
      list1: "Service",
      list2: "About",
      list3: "Product",
      list4: "Contact",
    },
    bn: {
      list0: "হোম",
      list1: "পরিষেবা",
      list2: "সম্পর্কে",
      list3: "পণ্য",
      list4: "যোগাযোগ",
    },
  };

  // Fallback to English if currentLanguage is undefined
  const currentContent = content[currentLanguage] || content.en;

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "background.default" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Logo
        </Typography>

        {/* Center: Menu List */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            justifyContent: { xs: "space-around", sm: "center" },
            position: { xs: "fixed", sm: "initial" },
            bottom: { xs: "0", sm: "initial" },
            backgroundColor: { xs: "background.default", sm: "transparent" },
            left: { xs: "0", sm: "initial" },
            padding: 1,
          }}
        >
          {/* Home */}
          <Tooltip arrow title={currentContent.list0} placement="top">
            <IconButton
              component={Link}
              to="/"
              sx={{
                display: { xs: "flex", sm: "none" },
                color: "text.primary",
              }}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Button
            component={Link}
            to="/"
            sx={{
              color: "text.primary",
              display: { xs: "none", sm: "flex" }, // Show full name on sm and above
            }}
          >
            {currentContent.list0}
          </Button>

          {/* Service */}
          <Tooltip arrow title={currentContent.list1} placement="top">
            <IconButton
              component={Link}
              to="/service"
              sx={{
                display: { xs: "flex", sm: "none" },
                color: "text.primary",
              }}
            >
              <BuildIcon />
            </IconButton>
          </Tooltip>
          <Button
            component={Link}
            to="/service"
            sx={{
              color: "text.primary",
              display: { xs: "none", sm: "flex" }, // Show full name on sm and above
            }}
          >
            {currentContent.list1}
          </Button>

          {/* About */}
          {/* <Tooltip arrow title={currentContent.list2} placement="top">
            <IconButton
              component={Link}
              to="/about"
              sx={{
                display: { xs: "flex", sm: "none" },
                color: "text.primary",
              }}
            >
              <InfoIcon />
            </IconButton>
            </Tooltip>
            <Button
              component={Link}
              to="/about"
              sx={{
                color: "text.primary",
                display: { xs: "none", sm: "flex" }, // Show full name on sm and above
              }}
            >
              {currentContent.list2}
            </Button> */}

          {/* Product */}
          <Tooltip arrow title={currentContent.list3} placement="top">
            <IconButton
              component={Link}
              to="/product"
              sx={{
                display: { xs: "flex", sm: "none" },
                color: "text.primary",
              }}
            >
              <StoreIcon />
            </IconButton>
          </Tooltip>
          <Button
            component={Link}
            to="/product"
            sx={{
              color: "text.primary",
              display: { xs: "none", sm: "flex" }, // Show full name on sm and above
            }}
          >
            {currentContent.list3}
          </Button>
          {/* Content */}
          <Tooltip arrow title={currentContent.list4} placement="top">
            <IconButton
              component={Link}
              to="/content"
              sx={{
                display: { xs: "flex", sm: "none" },
                color: "text.primary",
              }}
            >
              <ContactMailIcon />
            </IconButton>
          </Tooltip>
          <Button
            component={Link}
            to="/content"
            sx={{
              color: "text.primary",
              display: { xs: "none", sm: "flex" }, // Show full name on sm and above
            }}
          >
            {currentContent.list4}
          </Button>
        </Box>

        {/* Right: Theme & Language Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton onClick={toggleTheme} sx={{ color: "text.primary" }}>
            {isDarkMode ? (
              <Tooltip arrow title="Dark Mode">
                <DarkModeIcon />
              </Tooltip>
            ) : (
              <Tooltip arrow title="Light Mode">
                <LightModeIcon />
              </Tooltip>
            )}
          </IconButton>
          {/* Language Toggle */}
          <Tooltip arrow title="Language">
            <IconButton
              variant="outlined"
              sx={{
                color: "text.primary",
                fontSize: "1.2rem",
                fontWeight: "600",
                width: "40px",
                height: "40px",
              }}
              onClick={toggleLanguage}
            >
              {currentLanguage === "en" ? "E" : "অ"}
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
