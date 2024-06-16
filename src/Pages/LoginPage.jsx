import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import backgroundLogin from "../Assets/Login Page/background-login4.jpg";

const LoginPage = () => {
  // State untuk menyimpan nilai input dari field email dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fungsi untuk menangani perubahan nilai field email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Fungsi untuk menangani perubahan nilai field password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Di sini Anda dapat menambahkan logika autentikasi, misalnya dengan memanggil API backend
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        backgroundImage: `url(${backgroundLogin})`,
      }}
    >
      <Paper elevation={3} sx={{ padding: "2rem" }}>
        <Container maxWidth="xs">
          <div style={{ textAlign: "center" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Halaman Login
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
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="Masukkan password Anda"
                  value={password}
                  onChange={handlePasswordChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="right">
                  <Link
                    to={"/reset-password"}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontStyle: "italic",
                    }}
                  >
                    Lupa Password?
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {/* href disini sementara */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  href="/home"
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} mt={2}>
                <Typography variant="body2" align="center">
                  Belum punya akun?{" "}
                  <Link
                    to={"/register"}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontStyle: "italic",
                    }}
                  >
                    Daftar akun
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

export default LoginPage;
