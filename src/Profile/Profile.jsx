import React, { useState } from "react";
import { Box, Paper, Tabs, Tab } from "@mui/material";
import Header from "../Components/Header";
import Biodata from "./Biodata";
import Address from "./Address";
import AccountBank from "./AccountBank";


const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#faaa"
      >
        <Box
          width="100%"
          maxWidth="800px"
          p={2}
          bgcolor="#fafa"
          boxShadow={3}
          borderRadius={4}
          minHeight="70vh"
        >
          <Paper square sx={{ marginBottom: 2 }}>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Biodata Diri" />
              <Tab label="Daftar Alamat" />
              <Tab label="Rekening Bank" />
            </Tabs>
          </Paper>
          {tabIndex === 0 && <Biodata />}
          {tabIndex === 1 && <Address />}
          {tabIndex === 2 && <AccountBank />}
        </Box>
      </Box>
    </>
  );
};

export default Profile;
