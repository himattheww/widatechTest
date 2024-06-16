import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RegisterPage = () => {
  // State untuk menyimpan nilai input dari field email, username, password, dan konfirmasi password
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Fungsi untuk menangani perubahan nilai field email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Fungsi untuk menangani perubahan nilai field username
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Fungsi untuk menangani perubahan nilai field password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Fungsi untuk menangani perubahan nilai field konfirmasi password
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Fungsi untuk menampilkan atau menyembunyikan password
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Di sini Anda dapat menambahkan logika untuk menyimpan data pendaftaran pengguna
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Paper elevation={3} sx={{ padding: "2rem" }}>
        <Container maxWidth="xs">
          <div style={{ textAlign: "center" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Halaman Registrasi
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="Masukkan email Anda"
                  value={email}
                  onChange={handleEmailChange}
                  InputProps={{
                    startAdornment: (
                      <PersonIcon fontSize="small" sx={{ marginRight: 1 }} />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="Masukkan username Anda"
                  value={username}
                  onChange={handleUsernameChange}
                  InputProps={{
                    startAdornment: (
                      <PersonIcon fontSize="small" sx={{ marginRight: 1 }} />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="Masukkan password Anda"
                  value={password}
                  onChange={handlePasswordChange}
                  InputProps={{
                    startAdornment: (
                      <LockIcon fontSize="small" sx={{ marginRight: 1 }} />
                    ),
                    endAdornment: (
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="Konfirmasi password Anda"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  InputProps={{
                    startAdornment: (
                      <LockIcon fontSize="small" sx={{ marginRight: 1 }} />
                    ),
                    endAdornment: (
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                >
                  Daftar
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="center">
                  Sudah punya akun?{" "}
                  <Link
                    to={"/"}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontStyle: "italic",
                    }}
                  >
                    Masuk
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
