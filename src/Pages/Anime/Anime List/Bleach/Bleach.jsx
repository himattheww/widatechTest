import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { aniMangaList } from "../../../HomePage/Data";
import Header from "../../../../Components/Header";
import Daftarisi from "./Daftarisi";

const MangaDetail = () => {
  const { mangaId } = useParams();

  // Ensure aniMangaList and mangaData are defined
  if (!aniMangaList || !aniMangaList.mangaData) {
    return <Typography variant="h5">Data not found</Typography>;
  }

  const manga = aniMangaList.mangaData.find((m) => m.id === mangaId);

  if (!manga) {
    return <Typography variant="h5">Manga not found</Typography>;
  }

  const handleAddToFavorites = () => {
    console.log(`Added ${manga.title} to favorites.`);
  };

  return (
    <>
      <Header />
      <Box p={3} bgcolor="#212121" color="#fff">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "#424242", color: "#fff", boxShadow: 4 }}>
              <CardMedia
                component="img"
                height="500"
                image={manga.image}
                alt={manga.title}
              />
              <CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleAddToFavorites}
                  sx={{ bgcolor: "#ff80ab", color: "#fff" }}
                >
                  Tambahkan ke Favorit
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box display="flex" flexDirection="column">
              <Box p={2} bgcolor="#333" borderRadius={4} boxShadow={2} mb={2}>
                <Typography variant="h6" gutterBottom>
                  {manga.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Author:</strong> {manga.author}
                </Typography>
              </Box>
              <Box p={2} bgcolor="#333" borderRadius={4} boxShadow={2}>
                <Typography variant="h6" gutterBottom>
                  IKHTISAR
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {manga.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Daftarisi />
      </Box>
    </>
  );
};

export default MangaDetail;
