import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../Components/Header";

import Carousell from "./Carousel";
import Animangaupdate from "./Animangaupdate";
import SideContent from "./SideContent";

const HomePage = () => {
  const [toggleWidth, setToggleWidth] = useState(false);

  const handleToggleSize = () => {
    setToggleWidth(!toggleWidth);
  };

  return (
    <>
      <Header handleToggleSize={handleToggleSize} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          bgcolor: "#333",
        }}
      >
        <Carousell />

        {/* Main Content */}
        <Box sx={{ display: "flex", gap: 4 }}>
          <Animangaupdate />
          <SideContent />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
