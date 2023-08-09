import UploadImage from "../UploadImage/UploadImage"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, MenuItem, Chip } from '@mui/material';
import Navbar from '../Navbar/Navbar.jsx';
import { updateProfileAsync } from "../../redux/profile/profileThunks";
import Box from "@mui/material/Box";
import "./Profile.css";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Divider } from "@mui/material";



export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector((store) => store.profileReducer).profile;

  const [formData, setFormData] = useState({
    email: profile.email || '',
    name: profile.name || '',
    equipment: profile.equipment || [],
    interests: profile.interests || [],
    location: profile.location || '',
    image: profile.image || 'https://static-00.iconduck.com/assets.00/profile-circle-icon-1023x1024-ucnnjrj1.png'
  });
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [interest, setInterest] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEquipment = () => {
    if (selectedEquipment && !formData.equipment.includes(selectedEquipment)) {
      setFormData({ ...formData, equipment: [...formData.equipment, selectedEquipment] });
      setSelectedEquipment('');
    }
  };
  const handleDeleteEquipment = (equipment) => {
    setFormData({ ...formData, equipment: formData.equipment.filter(item => item !== equipment) });
  };

  const handleAddInterest = () => {
    if (interest.trim() !== '') {
      setFormData({ ...formData, interests: [...formData.interests, interest.trim()] });
      setInterest('');
    }
  };

  const handleDeleteInterest = (interest) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter(item => item !== interest)
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProfileAsync(formData)).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <div className="fullContainer">
      <Navbar />
      <div className="profileContainer">
        <Box>
          {formData.image ? (
            <img className="upload-image" width="200px" src={formData.image} alt="Selected"/>
          ) : (
            <div>
              <img className="upload-image" width="200px" src={profile.image} alt='placeholder'/>
            </div>
          )}
          <br />
          <input name="image" type="file" onChange={handleImageUpload} accept="image/*" />
      </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            type="contained"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            color="primary"
            sx={{color: 'white', marginBottom: '10px', marginTop: '20px'}}
          />

          <TextField
            name="selectedEquipment"
            label="Sports Equipment"
            value={selectedEquipment}
            onChange={(e) => setSelectedEquipment(e.target.value)}
            placeholder="Sports Equipment"
            style={{ marginBottom: '10px', boxSizing: 'border-box', width: '100%' }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleAddEquipment}
            disabled={!selectedEquipment}
            style={{ marginBottom: '10px' }}
          >
            Add
          </Button>

          <div style={{ marginBottom: '10px' }}>
            {formData.equipment && formData.equipment.map((equipment) => (
              <Chip
                key={equipment}
                label={equipment}
                onDelete={() => handleDeleteEquipment(equipment)}
                style={{ margin: '5px' }}
              />
            ))}
          </div>
          <GooglePlacesAutocomplete
                                    apiKey={process.env.REACT_APP_GOOGLE_MAPS_API}
                                    selectProps={{
                                        onChange: FormData.location,
                                        placeholder: "Location",
                                    }}
                                />
          <TextField
            name="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Interests"
            sx={{ marginBottom: '10px', boxSizing: 'border-box', width: '100%', mt: 2 }}
          />
          <div style={{ marginBottom: '20px' }}>
            {formData.interests && formData.interests.map((interest) => (
              <Chip
                key={interest}
                label={interest}
                onDelete={() => handleDeleteInterest(interest)}
              />
            ))}
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddInterest}
            style={{ marginBottom: '20px' }}
          >
            Add
          </Button>
          <Divider/>

          <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
          </Box>
        </form>

      </div>

    </div>
  )
}