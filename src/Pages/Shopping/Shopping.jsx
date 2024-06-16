import React, { useState } from "react";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";
import Header from "../../Components/Header";
import { aniMangaList } from "../HomePage/Data";


const Shopping = () => {
  const itemshop = aniMangaList.mangaData;

  const [quantities, setQuantities] = useState({});

  const handleIncrease = (title) => {
    setQuantities((prev) => ({
      ...prev,
      [title]: (prev[title] || 0) + 1,
    }));
  };

  const handleDecrease = (title) => {
    setQuantities((prev) => ({
      ...prev,
      [title]: (prev[title] || 0) > 0 ? prev[title] - 1 : 0,
    }));
  };

  const handleInputChange = (title, value) => {
    const number = parseInt(value, 10);
    if (!isNaN(number) && number >= 0) {
      setQuantities((prev) => ({
        ...prev,
        [title]: number,
      }));
    }
  };

  return (
    <>
      <Header />
      <Box p={2}>
        {itemshop.map((manga) => (
          <Paper
            key={manga.title}
            sx={{ p: 2, mb: 2, display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={manga.image}
              alt={manga.title}
              sx={{ width: 100, height: 150, mr: 2 }}
            />
            <Box flexGrow={1}>
              <Typography variant="h6">{manga.title}</Typography>
              <Typography variant="subtitle1">
                Author: {manga.author}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Button onClick={() => handleDecrease(manga.title)}>-</Button>
              <TextField
                value={quantities[manga.title] || 0}
                onChange={(e) => handleInputChange(manga.title, e.target.value)}
                inputProps={{ style: { textAlign: "center", width: 50 } }}
              />
              <Button onClick={() => handleIncrease(manga.title)}>+</Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default Shopping;
