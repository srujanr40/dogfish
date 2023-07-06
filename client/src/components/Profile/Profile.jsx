import UploadImage from "../UploadImage/UploadImage"
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { TextField, Button, MenuItem, Chip } from '@mui/material';
import Navbar from '../Navbar/Navbar.jsx';
import { updateProfileAsync } from "../../redux/thunks/thunks";


export default function Profile() {

    const profile = useSelector(store => store.profileReducer).profile;

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
        dispatch(updateProfileAsync(formData));
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
                    name="selectedEquipment"
                    label="Sports Equipment"
                    value={selectedEquipment}
                    onChange={(e) => setSelectedEquipment(e.target.value)}
                    placeholder="Sports Equipment"
                    style={{ marginBottom: '20px', boxSizing: 'border-box', width: '100%' }}
                  />

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