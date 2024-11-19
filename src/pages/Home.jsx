import React from "react";
import { Typography, Box } from "@mui/material";
import FadeIn from "../components/FadeIn";

const Home = ({ language }) => {
  const content = {
    en: {
      title: "Welcome to Our Website",
      description:
        "Discover amazing services and products tailored just for you.",
    },
    bn: {
      title: "আমাদের ওয়েবসাইটে স্বাগতম",
      description:
        "শুধুমাত্র আপনার জন্য উপযোগী আশ্চর্যজনক পরিষেবা এবং পণ্য আবিষ্কার করুন.",
    },
  };
  const currentContent = content[language] || content.en;
  return (
    <FadeIn>
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
            {currentContent.title}
          </Typography>
          <Typography variant="body1">{currentContent.description}</Typography>
        </Box>
      </Box>
    </FadeIn>
  );
};

export default Home;
