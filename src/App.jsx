import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import About from "./pages/About";
import Service from "./pages/Service";
import Product from "./pages/Product";
import Content from "./pages/Content";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en"); // Language state

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleLanguage = () => {
    setCurrentLanguage((prevLang) => (prevLang === "en" ? "bn" : "en"));
  };


    // Define themes
    const lightTheme = createTheme({
      palette: {
        mode: "light",
        primary: {
          main: "#000000", // Light theme primary color
        },
        secondary: {
          main: "#f50057", // Light theme secondary color
        },
        background: {
          default: "#f3f4f6", // Light theme background color
          paper: "#ffffff",
        },
        text: {
          primary: "#000000",
          secondary: "#5f6368",
        },
      },
    });
  
    const darkTheme = createTheme({
      palette: {
        mode: "dark",
        primary: {
          main: "#90caf9", // Dark theme primary color
        },
        secondary: {
          main: "#f48fb1", // Dark theme secondary color
        },
        background: {
          default: "#121212", // Dark theme background color
          paper: "#1e1e1e",
        },
        text: {
          primary: "#ffffff",
          secondary: "#9e9e9e",
        },
      },
    });
  
    const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        {/* Pass language and theme toggle props to Header */}
        <Header
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          toggleLanguage={toggleLanguage}
          currentLanguage={currentLanguage}
        />
        <Box>
          <Routes>
            {/* Pass the currentLanguage prop to all pages */}
            <Route path="/" element={<Home language={currentLanguage} />} />
            <Route path="/service" element={<Service language={currentLanguage} />} />
            {/* <Route path="/about" element={<About language={currentLanguage} />} /> */}
            <Route path="/product" element={<Product language={currentLanguage} />} />
            <Route path="/content" element={<Content language={currentLanguage} />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
