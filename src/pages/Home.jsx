import React from "react";
import {
  useTheme,
  Typography,
  Box,
  Container,
  Button,
  Grid2,
} from "@mui/material";
import FadeIn from "../components/FadeIn";

const Home = ({ language }) => {
  const theme = useTheme();
  const content = {
    en: {
      title: "Welcome to Our Website",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
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
          height: "calc(100vh - 88px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.text.secondary})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <Container maxWidth="md">
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 6, md: 6 }}>
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
                <Typography variant="body1">
                  {currentContent.description}
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Button variant="contained" sx={{
                    backgroundColor: "#f59e0b",
                  }}>Book an appointment</Button>
                  <Typography variant="body1">01615500006</Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 6 }}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Grid2>
          </Grid2>
        </Container>
      </Box>
      <Container>asdflkj</Container>
    </FadeIn>
  );
};

export default Home;
