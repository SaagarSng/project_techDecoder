import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import Common from "./Common";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the form data to your server or API
    // For this example, we'll just log the data
    console.log({ name, email, message });
  };

  return (
    <>
      <Common name="Connect with Us and Decode Your Potential with " />
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default ContactForm;
