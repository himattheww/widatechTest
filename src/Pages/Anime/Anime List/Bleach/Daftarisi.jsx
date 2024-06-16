import React from "react";
import { Box, Typography } from "@mui/material";
import { aniMangaList } from "../../../HomePage/Data";
import { useParams } from "react-router-dom";

const Daftarisi = () => {
  const { mangaId } = useParams();

  // Ensure aniMangaList and mangaData are defined
  if (!aniMangaList || !aniMangaList.mangaData) {
    return <Typography variant="h5">Data not found</Typography>;
  }

  const manga = aniMangaList.mangaData.find((m) => m.id === mangaId);

  if (!manga) {
    return <Typography variant="h5">Manga not found</Typography>;
  }

  return (
    <Box mt={4} p={2} bgcolor="#333" borderRadius={4} boxShadow={2}>
      <Typography variant="h6" gutterBottom>
        DAFTAR BAB
      </Typography>
      <Box>
        {manga.chapters && manga.chapters.length > 0 ? (
          manga.chapters.map((chapter, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={2}
              bgcolor="#424242"
              borderRadius={4}
              mb={2}
            >
              <Typography variant="body1">
                #{chapter.number} - {chapter.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {chapter.date}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">No chapters available</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Daftarisi;
