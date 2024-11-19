import React from "react";
import { Box, Typography } from "@mui/material";

const About = ({ language }) => {
  const content = {
    en: {
      title: "About Us",
      description: "Learn more about our company and the services we offer.",
    },
    bn: {
      title: "আমাদের সম্পর্কে",
      description: "আমাদের কোম্পানি এবং আমরা যে সেবাগুলি প্রদান করি তা সম্পর্কে জানুন।",
    },
  };

  const currentContent = content[language] || content.en;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        {currentContent.title}
      </Typography>
      <Typography variant="body1">{currentContent.description}</Typography>
    </Box>
  );
};

export default About;
