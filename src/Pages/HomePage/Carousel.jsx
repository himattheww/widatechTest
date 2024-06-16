import React from "react";
import Carousel from "react-material-ui-carousel"; // Pastikan untuk menginstal react-material-ui-carousel
import { Box } from "@mui/material";

// Import gambar untuk carousel dan cards
import backgroundHome from "../../Assets/Login Page/background-login3.jpg";
import MangaImage from "../../Assets/Login Page/background-login4.jpg";
import AnimeImage from "../../Assets/Login Page/background-login4.jpg";

const Carousell = () => {
  const carouselItems = [
    {
      img: backgroundHome,
      title: "Carousel Image 1",
    },
    {
      img: MangaImage,
      title: "Carousel Image 2",
    },
    {
      img: AnimeImage,
      title: "Carousel Image 3",
    },
  ];
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Carousel>
          {carouselItems.map((item, index) => (
            <Box
              key={index}
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          ))}
        </Carousel>
      </Box>
      ;
    </>
  );
};

export default Carousell;
