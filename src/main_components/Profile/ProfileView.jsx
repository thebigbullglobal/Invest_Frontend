import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Select, 
  MenuItem, 
  Button, 
  Avatar,
  Divider,
  Paper,
  InputAdornment,
  IconButton
} from '@mui/material';
import { 
  Edit as EditIcon,
  CameraAlt as CameraIcon,
  CheckCircle as CheckIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Home as HomeIcon,
  LocationOn as LocationIcon,
  DateRange as DateIcon,
  Male as MaleIcon,
  Female as FemaleIcon,
  Favorite as MaritalIcon,
  People as NomineeIcon,
  Lock as PasswordIcon
} from '@mui/icons-material';

const ProfileView = () => {
  const [profile, setProfile] = useState({
    name: "Ankit Singh",
    fatherName: "",
    dob: "12/12/1990",
    gender: "Male",
    maritalStatus: "Single",
    state: "Uttarakhand",
    district: "Dehradun",
    address: "Ankit singh\nDH298453",
    postalCode: "",
    mobile: "7565885536",
    email: "Ankit",
    nomineeName: "",
    relation: "",
    transactionPassword: ""
  });

  const [editMode, setEditMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    // Here you would typically send the data to your backend
  };

  return (
    <Box sx={{ 
     
      mx: 'auto', 
      p: 1,
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
        <PersonIcon fontSize="large" /> My Profile
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495e' }}>
            Profile Information
          </Typography>
          <Button 
            startIcon={<EditIcon />} 
            variant="outlined" 
            onClick={() => setEditMode(!editMode)}
            sx={{ textTransform: 'none' }}
          >
            {editMode ? 'Cancel' : 'Edit Profile'}
          </Button>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {/* Profile Photo Section */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            minWidth: 200 
          }}>
            <Avatar 
              src={previewImage || "https://i.pravatar.cc/150?img=3"} 
              sx={{ 
                width: 150, 
                height: 150, 
                mb: 2,
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                border: '3px solid white'
              }} 
            />
            {editMode && (
              <>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="profile-photo-upload"
                  type="file"
                  onChange={handleImageChange}
                />
                <label htmlFor="profile-photo-upload">
                  <Button 
                    variant="contained" 
                    component="span"
                    startIcon={<CameraIcon />}
                    sx={{ mb: 1, textTransform: 'none' }}
                  >
                    Change Photo
                  </Button>
                </label>
                {selectedImage && (
                  <Typography variant="caption" sx={{ color: 'green', display: 'flex', alignItems: 'center' }}>
                    <CheckIcon fontSize="small" sx={{ mr: 0.5 }} /> Ready to upload
                  </Typography>
                )}
              </>
            )}
            <Typography variant="body2" sx={{ mt: 1, color: '#7f8c8d' }}>
              {profile.mobile}
            </Typography>
          </Box>

          {/* Profile Details */}
          <Box sx={{ flex: 1 }}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { md: '1fr 1fr' }, 
                gap: 2,
                mb: 3
              }}>
                {/* Personal Details */}
                <Box sx={{ gridColumn: '1 / -1' }}>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: '#3498db', display: 'flex', alignItems: 'center' }}>
                    <PersonIcon sx={{ mr: 1 }} /> PERSONAL DETAIL
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                </Box>

                <TextField
                  label="Name"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color={editMode ? "primary" : "disabled"} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  label="Father/Husband's Name"
                  name="fatherName"
                  value={profile.fatherName}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                />

                <TextField
                  label="Date of Birth"
                  name="dob"
                  value={profile.dob}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateIcon color={editMode ? "primary" : "disabled"} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  select
                  label="Gender"
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {profile.gender === "Male" ? 
                          <MaleIcon color={editMode ? "primary" : "disabled"} /> : 
                          <FemaleIcon color={editMode ? "primary" : "disabled"} />}
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>

                <TextField
                  select
                  label="Marital Status"
                  name="maritalStatus"
                  value={profile.maritalStatus}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MaritalIcon color={editMode ? "primary" : "disabled"} />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="Single">Single</MenuItem>
                  <MenuItem value="Married">Married</MenuItem>
                  <MenuItem value="Divorced">Divorced</MenuItem>
                </TextField>

                {/* Contact Details */}
                <Box sx={{ gridColumn: '1 / -1', mt: 2 }}>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: '#3498db', display: 'flex', alignItems: 'center' }}>
                    <HomeIcon sx={{ mr: 1 }} /> CONTACT DETAIL
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                </Box>

                <TextField
                  label="State"
                  name="state"
                  value={profile.state}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationIcon color={editMode ? "primary" : "disabled"} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  label="District"
                  name="district"
                  value={profile.district}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                />

                <TextField
                  label="Address"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                  multiline
                  rows={2}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon color={editMode ? "primary" : "disabled"} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  label="Postal Code"
                  name="postalCode"
                  value={profile.postalCode}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                />

                <TextField
                  label="Mobile No"
                  name="mobile"
                  value={profile.mobile}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color={editMode ? "primary" : "disabled"} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  label="Email address"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color={editMode ? "primary" : "disabled"} />
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Nominee Details */}
                <Box sx={{ gridColumn: '1 / -1', mt: 2 }}>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: '#3498db', display: 'flex', alignItems: 'center' }}>
                    <NomineeIcon sx={{ mr: 1 }} /> NOMINEE DETAIL
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                </Box>

                <TextField
                  label="Nominee Name"
                  name="nomineeName"
                  value={profile.nomineeName}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                />

                <TextField
                  label="Relation"
                  name="relation"
                  value={profile.relation}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                />

                <TextField
                  label="Transaction Password"
                  name="transactionPassword"
                  type="password"
                  value={profile.transactionPassword}
                  onChange={handleChange}
                  disabled={!editMode}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon color={editMode ? "primary" : "disabled"} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {editMode && (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    sx={{ px: 4, textTransform: 'none' }}
                  >
                    Update Profile
                  </Button>
                </Box>
              )}
            </form>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProfileView;