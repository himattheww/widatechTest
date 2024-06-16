import React from "react";
import { Box, Button, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const SocialButtons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        bgcolor: "#1f1f1f",
        borderRadius: 1,
        p: 1,
      }}
    >
      <Button
        component="a"
        href="https://www.instagram.com/himattheww"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          flex: 1, // Membuat tombol menempati ruang yang sama
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#e91e63",
          color: "#fff",
          p: 2,
          borderRadius: 1,
          transition: "background-color 0.3s",
          "&:hover": { bgcolor: "#c2185b" },
          textTransform: "none", // Membuat teks tombol tidak semua huruf besar
          textDecoration: "none", // Menghilangkan underline pada link
        }}
      >
        <InstagramIcon sx={{ mr: 1 }} />
        <Typography variant="button">Instagram</Typography>
      </Button>
      <Button
        component="a"
        href="https://www.facebook.com/Machiiru"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#3b5998",
          color: "#fff",
          p: 2,
          borderRadius: 1,
          transition: "background-color 0.3s",
          "&:hover": { bgcolor: "#2a4887" },
          textTransform: "none",
          textDecoration: "none",
        }}
      >
        <FacebookIcon sx={{ mr: 1 }} />
        <Typography variant="button">Facebook</Typography>
      </Button>
      <Button
        component="a"
        href="mailto:matthewionwyn07@gmail.com"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#cddc39",
          color: "#fff",
          p: 2,
          borderRadius: 1,
          transition: "background-color 0.3s",
          "&:hover": { bgcolor: "#afb42b" },
          textTransform: "none",
          textDecoration: "none",
        }}
      >
        <EmailIcon sx={{ mr: 1 }} />
        <Typography variant="button">Email</Typography>
      </Button>
    </Box>
  );
};

export default SocialButtons;
