import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import image from "./images/ContactUs.jpg";

const ContactPage = () => {
  return (
    <Box sx={{ padding: "100px" }}>
      <Typography variant="h2" component="h1" align="center" color="primary">
        Get in Touch
      </Typography>
      <Grid container spacing={2} sx={{ padding: "50px 50px 50px 50px" }}>
        {/* Left Grid: Image */}
        <Grid item xs={12} sm={6}>
          <img
            src={image}
            alt="Contact Us"
            style={{ width: "80%", height: "80%" }}
          />
        </Grid>

        {/* Right Grid: Contact Form */}
        <Grid item xs={12} sm={6} sx={{ padding: "50px 50px 50px 50px" }}>
          <Paper elevation={3} style={{ padding: "2rem" }}>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <form>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      {/* Rest of the contact page content */}
    </Box>
  );
};

export default ContactPage;
