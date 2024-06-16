import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Divider,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { styled } from "@mui/material/styles";

const Biodata = () => {
  const [open, setOpen] = useState(false);
  const [currentField, setCurrentField] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  const [profileData, setProfileData] = useState({
    nama: "Matthew",
    tanggalLahir: "01/01/2000",
    jenisKelamin: "Laki-Laki",
    email: "matthew@example.com",
    nomorHP: "081234567890",
    avatar: "/static/images/avatar/1.jpg",
  });

  const handleOpen = (field) => {
    setCurrentField(field);
    setFieldValue(profileData[field]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setProfileData({
      ...profileData,
      [currentField]: fieldValue,
    });
    setOpen(false);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileData({
          ...profileData,
          avatar: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const renderDialog = (field) => (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ubah {field}</DialogTitle>
      <DialogContent>
        <Typography variant="body2" gutterBottom>
          Kamu hanya dapat merubah {field} 1 kali. Pastikan {field} sudah benar.
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
          placeholder={`Masukkan ${field}`}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Batal
        </Button>
        <Button onClick={handleSave} color="primary">
          Simpan
        </Button>
      </DialogActions>
    </Dialog>
  );

  const AvatarBox = styled(Box)(({ theme }) => ({
    position: "relative",
    "&:hover": {
      "& .edit-icon": {
        visibility: "visible",
      },
    },
  }));

  const EditIconButton = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    top: 0,
    right: 0,
    visibility: "hidden",
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  }));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="100vh"
      bgcolor="#fafafa"
      p={4}
      style={{
        backgroundImage: "url('/static/images/manga_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Box 1 */}
      <Box
        component={Paper}
        elevation={3}
        p={2}
        mr={2}
        width={300}
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <AvatarBox>
          <Tooltip title="Edit Foto" arrow>
            <Avatar src={profileData.avatar} sx={{ width: 100, height: 100 }} />
          </Tooltip>
          <EditIconButton className="edit-icon" onClick={() => document.getElementById("upload-photo").click()}>
            <EditIcon />
          </EditIconButton>
        </AvatarBox>
        <input
          type="file"
          id="upload-photo"
          hidden
          accept="image/*"
          onChange={handlePhotoUpload}
        />
        <Button
          variant="outlined"
          color="primary"
          component="label"
          sx={{ mt: 2 }}
          style={{
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
          }}
        >
          Unggah Foto
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </Button>
        <Divider sx={{ my: 2, width: "100%" }} />
        <Button variant="outlined" color="primary" sx={{ mt: 1, width: "100%" }}>
          Ubah Kata Sandi
        </Button>
        <Button variant="outlined" color="primary" sx={{ mt: 1, width: "100%" }}>
          Ubah PIN Wibushop
        </Button>
      </Box>

      {/* Box 2 */}
      <Box
        component={Paper}
        elevation={3}
        p={2}
        width={600}
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Ubah Biodata Diri */}
        <Typography
          variant="h6"
          sx={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
        >
          Ubah Biodata Diri
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" alignItems="center" my={2}>
          <Typography variant="body1" sx={{ flex: 1, fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>Nama</Typography>
          <Typography variant="body2" sx={{ mr: 2, fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>{profileData.nama}</Typography>
          <Button variant="text" color="primary" onClick={() => handleOpen("nama")}>
            Ubah
          </Button>
        </Box>
        <Box display="flex" alignItems="center" my={2}>
          <Typography variant="body1" sx={{ flex: 1, fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>Tanggal Lahir</Typography>
          <Typography variant="body2" sx={{ mr: 2, fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>{profileData.tanggalLahir}</Typography>
          <Button variant="text" color="primary" onClick={() => handleOpen("tanggalLahir")}>
            Ubah
          </Button>
        </Box>
        <Box display="flex" alignItems="center" my={2}>
          <Typography variant="body1" sx={{ flex: 1, fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>Jenis Kelamin</Typography>
          <Typography variant="body2" sx={{ mr: 2, fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>{profileData.jenisKelamin}</Typography>
          <Button variant="text" color="primary" onClick={() => handleOpen("jenisKelamin")}>
            Ubah
          </Button>
        </Box>

        {/* Ubah Kontak */}
        <Typography variant="h6" sx={{ mt: 3, fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>Ubah Kontak</Typography>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" alignItems="center" my={2}>
          <Typography variant="body1" sx={{ flex: 1, fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>Email</Typography>
          <Typography variant="body2" sx={{ mr: 2, fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>{profileData.email}</Typography>
          <Button variant="text" color="primary" onClick={() => handleOpen("email")}>
            Ubah
          </Button>
        </Box>
        <Box display="flex" alignItems="center" my={2}>
          <Typography variant="body1" sx={{ flex: 1, fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>Nomor HP</Typography>
          <Typography variant="body2" sx={{ mr: 2, fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>{profileData.nomorHP}</Typography>
          <Button variant="text" color="primary" onClick={() => handleOpen("nomorHP")}>
            Ubah
          </Button>
        </Box>
      </Box>

      {/* Render dialog for editing fields */}
      {renderDialog(currentField)}
    </Box>
  );
};

export default Biodata;
