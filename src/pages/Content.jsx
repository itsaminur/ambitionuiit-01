import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
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
    <Box sx={{ padding: 4 }}>
      <Box sx={{
        display:'flex', flexDirection:'column', alignItems:'center'
      }}>
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
            onChange={handleChange}
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
      </Box>

      {/* Google Map */}
      <Box sx={{ marginTop: 4, height: "400px", width: "100%" }}>
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
      </Box>
    </Box>
  );
};

export default Content;
