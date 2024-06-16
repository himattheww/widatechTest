import React, { useState } from "react";
import Header from "../../Components/Header";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { aniMangaList } from "../HomePage/Data";
import { useNavigate } from "react-router-dom";
import FilterListIcon from '@mui/icons-material/FilterList';

const MangaList = () => {
  const [mangaList, setMangaList] = useState(aniMangaList.mangaData);
  const [sortType, setSortType] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleSort = (type) => {
    if (type === "AtoZ" && sortType !== "AtoZ") {
      const sortedList = [...mangaList].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setMangaList(sortedList);
      setSortType("AtoZ");
    } else if (type === "ZtoA" && sortType !== "ZtoA") {
      const sortedList = [...mangaList].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setMangaList(sortedList);
      setSortType("ZtoA");
    } else if (type === "MostRecent" && sortType !== "MostRecent") {
      const sortedList = [...mangaList].sort((a, b) =>
        new Date(b.date) - new Date(a.date)
      );
      setMangaList(sortedList);
      setSortType("MostRecent");
    }
  };

  const handleCardClick = (link) => {
    navigate(link);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (type) => {
    handleSort(type);
    setAnchorEl(null);
  };

  return (
    <>
      <Header />
      <Box p={3} bgcolor="#212121">
        <Box
          bgcolor="#ff80ab"
          p={2}
          mb={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          boxShadow={2}
        >
          <Typography variant="h5" color="#fff">
            Daftar Manga
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSort("AtoZ")}
              disabled={sortType === "AtoZ"}
              sx={{ mr: 1 }}
            >
              A to Z
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSort("ZtoA")}
              disabled={sortType === "ZtoA"}
              sx={{ mr: 1 }}
            >
              Z to A
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSort("MostRecent")}
              disabled={sortType === "MostRecent"}
              sx={{ mr: 1 }}
            >
              Most Recent
            </Button>
            <IconButton
              color="inherit"
              onClick={handleMenuClick}
            >
              <FilterListIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleMenuClose("AtoZ")}>A to Z</MenuItem>
              <MenuItem onClick={() => handleMenuClose("ZtoA")}>Z to A</MenuItem>
              <MenuItem onClick={() => handleMenuClose("MostRecent")}>Most Recent</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {mangaList.map((manga, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <Card
                onClick={() => handleCardClick(manga.link)}
                sx={{
                  width: "100%", // Card will take full width of the Grid item
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  boxShadow: 4,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    cursor: "pointer",
                  },
                  bgcolor: "#424242",
                  color: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={manga.image}
                  alt={manga.title}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="#fff"
                  >
                    {manga.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    <strong>Author:</strong> {manga.author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MangaList;
