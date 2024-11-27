import React from "react";
import { useTheme, Typography, Box, Button, Tooltip, Container } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      background:`${theme.palette.background.paper}`,
    }}>
      <Container>
        <Typography>Footer</Typography>
        <Tooltip arrow title="Help">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f59e0b8f",
              color: "#fff",
              position: "fixed",
              right: "8px",
              bottom: {
                xs: "64px",
                sm: "8px",
              },
              "&:hover": {
                backgroundColor: "#f59e0b",
              },
            }}
          >
            Help
          </Button>
        </Tooltip>
      </Container>
    </Box>
  );
};

export default Footer;
