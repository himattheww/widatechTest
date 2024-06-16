import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  MenuItem,
  Select,
  TextField,
  IconButton,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AccountBank = () => {
  const [showAddBankForm, setShowAddBankForm] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankAccounts, setBankAccounts] = useState([]);

  const handleAddBank = () => {
    setShowAddBankForm(true);
  };

  const handleBankSelectChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };

  const handleSaveBank = () => {
    if (selectedBank && accountNumber) {
      setBankAccounts([
        ...bankAccounts,
        { bankName: selectedBank, accountNumber: accountNumber },
      ]);
      setSelectedBank("");
      setAccountNumber("");
      setShowAddBankForm(false);
    } else {
      alert("Please select a bank and enter account number.");
    }
  };

  const bankNames = [
    "Bank Mandiri",
    "Bank Central Asia (BCA)",
    "Bank Rakyat Indonesia (BRI)",
    "Bank Negara Indonesia (BNI)",
    "Bank CIMB Niaga",
    "Bank Danamon",
    "Bank Tabungan Negara (BTN)",
    "Bank Permata",
    "Bank Syariah Mandiri",
    "Bank Mega",
    "Bank Panin",
    "Bank OCBC NISP",
    "Bank Maybank Indonesia",
    "Bank Bukopin",
    "Bank BTN Syariah",
    "Bank Victoria Internasional",
    "Bank BTPN",
    "Bank Sinarmas",
    "Bank Jatim",
    "Bank DKI",
  ];

  return (
    <>
      <Box p={2}>
        <Typography variant="h4" gutterBottom>
          Rekening Bank
        </Typography>
        {showAddBankForm ? (
          <Paper sx={{ p: 3, mt: 3, position: "relative", borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6">Mau tambah rekening apa?</Typography>
            <IconButton
              aria-label="Close"
              sx={{ position: "absolute", top: 8, right: 8 }}
              onClick={() => setShowAddBankForm(false)}
            >
              <CloseIcon />
            </IconButton>
            <Select
              fullWidth
              value={selectedBank}
              onChange={handleBankSelectChange}
              displayEmpty
              sx={{ mt: 3, mb: 2 }}
            >
              <MenuItem value="" disabled>
                Pilih Bank
              </MenuItem>
              {bankNames.map((bankName) => (
                <MenuItem key={bankName} value={bankName}>
                  {bankName}
                </MenuItem>
              ))}
            </Select>
            <TextField
              fullWidth
              label="Nomor Rekening"
              variant="outlined"
              value={accountNumber}
              onChange={handleAccountNumberChange}
              sx={{ mb: 3 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveBank}
            >
              Tambah Rekening
            </Button>
          </Paper>
        ) : (
          <Tooltip title="Tambahkan Rekening Lain" arrow>
            <IconButton
              onClick={handleAddBank}
              sx={{ mt: 2, color: "primary.main" }}
            >
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        )}
        {bankAccounts.map((account, index) => (
          <Paper key={index} sx={{ p: 2, mt: 2, borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="subtitle1">
              <strong>Nama Bank:</strong> {account.bankName}
            </Typography>
            <Typography variant="subtitle1">
              <strong>Nomor Rekening:</strong> {account.accountNumber}
            </Typography>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default AccountBank;
