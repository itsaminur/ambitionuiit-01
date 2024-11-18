import React from "react";
import { Typography, Box } from "@mui/material";

const Home = () => (
  <Box
    sx={{
      height: "calc(100vh - 64px)", // Full viewport height
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url('https://via.placeholder.com/1920x1080')`, // Replace with your image URL
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff", // Text color for better contrast
      textAlign: "center",
    }}
  >
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="body1">
        Discover amazing services and products tailored just for you.
      </Typography>
    </Box>
  </Box>
);

export default Home;
