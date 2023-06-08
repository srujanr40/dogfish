import UploadImage from "../UploadImage/UploadImage"
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { updateProfile } from '../../actions/index.js'
import { TextField, Button, MenuItem, Chip } from '@mui/material';
import Navbar from '../Navbar/Navbar.jsx';


const sportsEquipmentOptions = [
    'Football',
    'Basketball',
    'Tennis racket',
    'Baseball bat',
    'Soccer ball',
];


export default function Profile() {

    const profile = useSelector(state => state.updateProfile);
    console.log(profile);

    const [formData, setFormData] = useState({
        name: profile.name,
        equipment: profile.equipment,
        interests: profile.interests,
        location: profile.location,
      });
      const [selectedEquipment, setSelectedEquipment] = useState('');
      const [interest, setInterest] = useState('');
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleEquipmentChange = (event) => {
        setSelectedEquipment(event.target.value);
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

      const dispatch = useDispatch();
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        dispatch(updateProfile(formData));
      };
    

    return(
        <div>
            <Navbar />
            <div style=
                {{  display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                 <UploadImage image={profile.image}/>
                <form onSubmit={handleSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    style={{ marginBottom: '20px', marginTop: '20px' }}
                />

                <TextField
                    select
                    name="selectedEquipment"
                    label="Sports Equipment"
                    value={selectedEquipment}
                    onChange={handleEquipmentChange}
                    fullWidth
                    style={{ marginBottom: '20px' }}
                >
                    {sportsEquipmentOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                    ))}
                </TextField>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddEquipment}
                    disabled={!selectedEquipment}
                    style={{ marginBottom: '20px' }}
                >
                    Add
                </Button>

                <div style={{ marginBottom: '20px' }}>
                    {formData.equipment.map((equipment) => (
                    <Chip
                        key={equipment}
                        label={equipment}
                        onDelete={() => handleDeleteEquipment(equipment)}
                        style={{ margin: '5px' }}
                    />
                    ))}
                </div>
                <TextField
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="Interests"
                    style={{ marginBottom: '20px', boxSizing: 'border-box', width: '100%' }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddInterest}
                    style={{ marginBottom: '20px' }}
                >
                    Add
                </Button>
                <div style={{ marginBottom: '20px' }}>
                    {formData.interests.map((interest) => (
                    <Chip
                        key={interest}
                        label={interest}
                        onDelete={() => handleDeleteInterest(interest)}
                        style={{ margin: '5px' }}
                    />
                    ))}
                </div>
                <TextField
                    name="location"
                    label="Location"
                    value={formData.location}
                    onChange={handleChange}
                    fullWidth
                    required
                    style={{ marginBottom: '20px' }}
                />

                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>   

            </div>

        </div>
    )
}