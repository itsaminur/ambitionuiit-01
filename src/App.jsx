import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
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

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

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
            <Route path="/about" element={<About language={currentLanguage} />} />
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
