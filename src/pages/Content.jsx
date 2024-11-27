import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid2 } from "@mui/material";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import emailjs from "emailjs-com";

const Content = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    phone: "",
  });
  const [isSent, setIsSent] = useState(false); // Track email sent status
  const [error, setError] = useState(false); // Track email error status

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA1sLmdnpYp9h-YEx6_ULHO2F7bFwuOdPE", // Replace with your API key
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2p50xoe", // Your EmailJS Service ID
        "template_uxmd71j", // Your EmailJS Template ID
        {
          name: formData.name,
          message: formData.message,
          phone: formData.phone,
        },
        "SXGkdyudamOZ9MSHo" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSent(true); // Set the success status
          setError(false); // Reset error status if previously set
          setFormData({ name: "", message: "", phone: "" }); // Reset form
        },
        (error) => {
          console.error("Error sending email:", error);
          setIsSent(false);
          setError(true); // Set the error status
        }
      );
  };

  return (
    <Grid2 container spacing={2}>
      {/* Google Map */}
      <Grid2
        size={{ xs: 6, md: 6 }}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ height: "100%", width: "100%" }}
            zoom={16}
            center={{ lat: 23.8742178, lng: 90.3831819 }} // Replace with your desired location
          >
            <Marker position={{ lat: 23.8742178, lng: 90.3831819 }} />
          </GoogleMap>
        ) : (
          <Typography>Loading Map...</Typography>
        )}
      </Grid2>
      <Grid2
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "calc(100vh - 88px)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            width: "100%",
          }}
        >
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <TextField
            name="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={(e) => {
              const re = /^[0-9\b]+$/; // Regex to allow only numbers
              if (e.target.value === "" || re.test(e.target.value)) {
                handleChange(e); // Call your handler with validated input
              }
            }}
            type="tel"
            required
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#1f2937" }}
          >
            Send
          </Button>
        </Box>
        {isSent && (
          <Typography sx={{ marginTop: 2, color: "green" }}>
            Your message has been sent successfully!
          </Typography>
        )}
        {error && (
          <Typography sx={{ marginTop: 2, color: "red" }}>
            Failed to send the message. Please try again later.
          </Typography>
        )}
        {/* <Box
          sx={{
            width: "100%",
            height: "100%",
            "& iframe": {
              height: "100%",
              width: "100%",
              "& *html": {
                background: "red",
              },
            },
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf2WBoGx1hfASeMTOwSfUunenSVauqJKE5g6LajTbP5jcyXOw/viewform?usp=sf_link"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Box> */}
      </Grid2>
    </Grid2>
  );
};

export default Content;
