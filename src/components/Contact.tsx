import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container, Grid } from "@mui/material";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <Container maxWidth="lg" id="contact" sx={{
      py: 4,
      textAlign: "center",
      color: "white"
    }}>
      <Typography variant="h4" sx={{
        mb: 5,
        fontWeight: "bold",
        "& .highlight": {
          color: "#3fa9f5"
        }
      }}>
        Contact <span className="highlight">Me</span>
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 900,
          mx: "auto",
          "& .MuiTextField-root": {
            width: "100%",
            mb: { xs: 2, md: 0 }
          },
          "& .MuiInputBase-root": {
            backgroundColor: "#222741",
            borderRadius: 1,
            color: "white",
            "& fieldset": {
              border: "none"
            },
            "&:hover fieldset": {
              border: "none"
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #3fa9f5"
            }
          },
          "& .MuiInputBase-input": {
            p: 2
          }
        }}
      >
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="email"
              type="email"
              placeholder="Enter Your Mail Id"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField
              name="phone"
              type="tel"
              placeholder="Enter Your Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="subject"
              placeholder="Enter Subject Of The Mail"
              value={formData.subject}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
        </Grid>

        <TextField
          name="message"
          placeholder="Enter Your Message Here..."
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={6}
          required
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button
          type="submit"
          sx={{
            py: 1.5,
            px: 5,
            fontSize: "1rem",
            borderRadius: "999px",
            backgroundColor: "#3fa9f5",
            color: "#000",
            boxShadow: "0 0 12px #3fa9f5",
            marginTop: 2,
            "&:hover": {
              backgroundColor: "#1e84d8",
              boxShadow: "0 0 18px #3fa9f5"
            }
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
