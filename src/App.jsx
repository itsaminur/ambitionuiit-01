import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Product from "./pages/Product";
import Content from "./pages/Content";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Header />
      <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/content" element={<Content />} />
      </Routes>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;
