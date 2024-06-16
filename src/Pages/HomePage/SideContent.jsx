import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot"; // Mengganti VisibilityIcon dengan WhatshotIcon
import SocialButtons from "./SocialMedia";

const SideContent = () => {
  const mostViewedContent = Array.from({ length: 10 }, (_, index) => ({
    title: `Most Viewed Title ${index + 1}`,
    description: `Description for Most Viewed Content ${index + 1}`,
  }));

  return (
    <>
      {/* Box 2.2: Side Content */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        {/* Box 2.2.1: Social Media */}

        {/* <Box
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
            }}
          >
            <InstagramIcon sx={{ mr: 1 }} />
            <Typography variant="button">Instagram</Typography>
          </Button>
          <Button
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
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <Typography variant="button">Facebook</Typography>
          </Button>
          <Button
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
            }}
          >
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="button">Email</Typography>
          </Button>
        </Box> */}
        <SocialButtons/>

        {/* Box 2.2.2: Most Viewed Content */}
        <Box
          sx={{
            background: "linear-gradient(to bottom, #800000, #330000)",
            // borderRadius: 4,
            borderBottomLeftRadius: 20,
            p: 2,
          }}
        >
          {/* Sub-box 2.2.2.1: Icon and Title */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <WhatshotIcon sx={{ mr: 1, color: "#ff5722" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FFF" }}>
              Paling Sering Dilihat
            </Typography>
          </Box>

          {/* Sub-box 2.2.2.2: Content Cards */}
          <Box>
            <Grid container spacing={2}>
              {mostViewedContent.map((content, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{ "&:hover": { boxShadow: 6, bgcolor: "#fff9c4" } }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          color: "#fbc02d",
                        }}
                      >
                        {content.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "#f57f17" }}
                      >
                        {content.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SideContent;
