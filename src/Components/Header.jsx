import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Link,
  Box,
} from "@mui/material";
import { Search as SearchIcon, AccountCircle } from "@mui/icons-material";
import Swal from "sweetalert2";
import logoWibushop from "../Assets/Logo/logo2.webp";

const Header = ({ handleToggleSize }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDownloadClick = () => {
    Swal.fire({
      title: "Still on development",
      text: "Please wait for the next update",
      icon: "info",
      confirmButtonText: "OK",
      background: "#333",
      color: "#fff",
      confirmButtonColor: "#ff4081",
      customClass: {
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
        confirmButton: "swal-confirm-button",
      },
    });
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#333", borderBottom: "2px solid #ff4081" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link href="/home" underline="none">
            <img
              src={logoWibushop}
              alt="Logo"
              style={{ height: "40px", marginRight: "16px", cursor: "pointer" }}
            />
          </Link>
          <Typography
            variant="h6"
            sx={{ color: "#ff4081", fontWeight: "bold" }}
          >
            Berwibuwa
          </Typography>
          <Box sx={{ display: "flex", ml: 2 }}>
            <Link href="/mangalist" underline="none">
              <Typography variant="h6" sx={{ color: "#ff4081", ml: 2 }}>
                Daftar Manga
              </Typography>
            </Link>
            <Link href="/animelist" underline="none">
              <Typography variant="h6" sx={{ color: "#ff4081", ml: 2 }}>
                Daftar Anime
              </Typography>
            </Link>
            <Link href="/shop" underline="none">
              <Typography variant="h6" sx={{ color: "#ff4081", ml: 2 }}>
                Shopping
              </Typography>
            </Link>
          </Box>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <InputBase
            placeholder="Cari Anime/Manga"
            sx={{
              color: "#fff",
              backgroundColor: "#555",
              padding: "0 10px",
              borderRadius: "4px",
              marginRight: "16px",
            }}
            startAdornment={<SearchIcon sx={{ marginRight: "8px" }} />}
          />
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ borderRadius: "20px", backgroundColor: "#ff4081" }}
            onClick={handleDownloadClick} // Tambahkan handler click
          >
            DOWNLOAD
          </Button>
          <IconButton sx={{ color: "#fff" }} onClick={handleMenuOpen}>
            <AccountCircle />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                backgroundColor: "#444",
                color: "#fff",
                borderRadius: "8px",
                minWidth: "150px",
              },
            }}
          >
            <MenuItem
              // buat comoponent = {Link untuk menandakan dia Link}
              component={Link}
              href="/profile"
              onClick={handleMenuClose}
              sx={{
                "&:hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              Profile Saya
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                "&:hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
