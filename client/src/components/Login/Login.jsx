import UploadImage from "../UploadImage/UploadImage"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, MenuItem, Chip } from '@mui/material';
import Navbar from '../Navbar/Navbar.jsx';
import { updateProfileAsync } from "../../redux/profile/profileThunks";
import './Login.css'
import { Link } from 'react-router-dom';


import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Divider from '@mui/material/Divider';


export default function Login() {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div className="LoginScreen">
            <div className="LoginContainer">
                <h2>dogFish</h2>
                <div>
                    <TextField sx={{m: 1, width: '25ch' }} id="outlined-basic" label="Username" variant="outlined" />
                </div>
                <div>
                    <FormControl sx={{m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <div className="loginButton">
                    <Button sx={{m: 1, width: '33ch' }} variant="contained">Login</Button>
                    <Divider>Or</Divider>
                    <Link to="/signup" style={{ color: 'white' }}>
                    <Button sx={{m: 1, width: '33ch' }} variant="contained">Sign up</Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}