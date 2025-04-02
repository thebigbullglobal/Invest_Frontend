import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Select, 
  MenuItem, 
  Button, 
  Checkbox,
  FormControlLabel,
  Paper,
  InputAdornment,
  IconButton,
  Avatar
} from '@mui/material';
import { 
  AccountBalance as BankIcon,
   Edit as EditIcon,
   Person as PersonIcon,
  CreditCard as AccountIcon,
  AccountBalanceWallet as BranchIcon,
  Fingerprint as AadharIcon,
  Payment as PANIcon,
  Lock as PasswordIcon,
  CloudUpload as UploadIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

const BankDetailsKyc = () => {
  const [bankDetails, setBankDetails] = useState({
    accountName: "DR208453",
    accountNo: "",
    bankName: "",
    ifscCode: "",
    branchName: "",
    accountType: "",
    panNo: "NOBP55275F",
    aadharNo: "",
    transactionPassword: "",
    declaration: false
  });

  const [panFile, setPanFile] = useState(null);
  const [bankFile, setBankFile] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setBankDetails(prev => ({ ...prev, declaration: e.target.checked }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'pan') setPanFile(file);
      if (type === 'bank') setBankFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    // Submit logic here
  };

  return (
    <Box sx={{ 
    
      mx: 'auto', 
      my: 4,
      p: 3,
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
      borderRadius: 4,
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <Typography variant="h4" sx={{ 
        mb: 3, 
        fontWeight: 'bold', 
        color: '#2c3e50',
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        <BankIcon fontSize="large" /> YOUR BANK DETAILS
      </Typography>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495e' }}>
            Bank Account Information
          </Typography>
          <Button 
            startIcon={<EditIcon />} 
            variant="outlined" 
            onClick={() => setEditMode(!editMode)}
            sx={{ textTransform: 'none' }}
          >
            {editMode ? 'Cancel' : 'Edit Details'}
          </Button>
        </Box>

        <form onSubmit={handleSubmit}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { md: '1fr 1fr' }, 
            gap: 3,
            mb: 3
          }}>
            {/* Left Column */}
            <Box>
              <TextField
                label="Account Name"
                name="accountName"
                value={bankDetails.accountName}
                onChange={handleChange}
                disabled={!editMode}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color={editMode ? "primary" : "disabled"} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Account No."
                name="accountNo"
                value={bankDetails.accountNo}
                onChange={handleChange}
                disabled={!editMode}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountIcon color={editMode ? "primary" : "disabled"} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Bank Name"
                name="bankName"
                value={bankDetails.bankName}
                onChange={handleChange}
                disabled={!editMode}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BankIcon color={editMode ? "primary" : "disabled"} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="IFSC Code"
                name="ifscCode"
                value={bankDetails.ifscCode}
                onChange={handleChange}
                disabled={!editMode}
                fullWidth
                sx={{ mb: 2 }}
              />

              <TextField
                label="Branch Name"
                name="branchName"
                value={bankDetails.branchName}
                onChange={handleChange}
                disabled={!editMode}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BranchIcon color={editMode ? "primary" : "disabled"} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Right Column */}
            <Box>
              <TextField
                select
                label="Account Type"
                name="accountType"
                value={bankDetails.accountType}
                onChange={handleChange}
                disabled={!editMode}
                fullWidth
                sx={{ mb: 2 }}
              >
                <MenuItem value="Savings">Savings Account</MenuItem>
                <MenuItem value="Current">Current Account</MenuItem>
                <MenuItem value="Salary">Salary Account</MenuItem>
              </TextField>

              <TextField
                label="PAN No."
                name="panNo"
                value={bankDetails.panNo}
                onChange={handleChange}
                disabled={!editMode}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PANIcon color={editMode ? "primary" : "disabled"} />
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>PAN Photo</Typography>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="pan-photo-upload"
                  type="file"
                  onChange={(e) => handleFileChange(e, 'pan')}
                  disabled={!editMode}
                />
                <label htmlFor="pan-photo-upload">
                  <Button 
                    variant="outlined" 
                    component="span"
                    startIcon={<UploadIcon />}
                    fullWidth
                    sx={{ justifyContent: 'flex-start' }}
                    disabled={!editMode}
                  >
                    {panFile ? panFile.name : "Choose File"}
                  </Button>
                </label>
                {panFile && (
                  <Typography variant="caption" sx={{ color: 'green', display: 'flex', alignItems: 'center', mt: 1 }}>
                    <CheckIcon fontSize="small" sx={{ mr: 0.5 }} /> File selected
                  </Typography>
                )}
              </Box>

              <TextField
                label="Aadhar No."
                name="aadharNo"
                value={bankDetails.aadharNo}
                onChange={handleChange}
                disabled={!editMode}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AadharIcon color={editMode ? "primary" : "disabled"} />
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>Bank Details Proof</Typography>
                <input
                  accept="image/*,.pdf"
                  style={{ display: 'none' }}
                  id="bank-details-upload"
                  type="file"
                  onChange={(e) => handleFileChange(e, 'bank')}
                  disabled={!editMode}
                />
                <label htmlFor="bank-details-upload">
                  <Button 
                    variant="outlined" 
                    component="span"
                    startIcon={<UploadIcon />}
                    fullWidth
                    sx={{ justifyContent: 'flex-start' }}
                    disabled={!editMode}
                  >
                    {bankFile ? bankFile.name : "Choose File"}
                  </Button>
                </label>
                {bankFile && (
                  <Typography variant="caption" sx={{ color: 'green', display: 'flex', alignItems: 'center', mt: 1 }}>
                    <CheckIcon fontSize="small" sx={{ mr: 0.5 }} /> File selected
                  </Typography>
                )}
              </Box>

              <TextField
                label="Transaction Password"
                name="transactionPassword"
                type="password"
                value={bankDetails.transactionPassword}
                onChange={handleChange}
                disabled={!editMode}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon color={editMode ? "primary" : "disabled"} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                checked={bankDetails.declaration}
                onChange={handleCheckboxChange}
                disabled={!editMode}
                color="primary"
              />
            }
            label="HEREBY DECLARE THAT THE ABOVE MENTIONED ACCOUNT DETAILS ARE TRUE."
            sx={{ mb: 3 }}
          />

          {editMode && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button 
                variant="outlined" 
                onClick={() => setEditMode(false)}
                sx={{ textTransform: 'none', px: 4 }}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                disabled={!bankDetails.declaration}
                sx={{ textTransform: 'none', px: 4 }}
              >
                Submit
              </Button>
            </Box>
          )}
        </form>
      </Paper>
    </Box>
  );
};

export default BankDetailsKyc;