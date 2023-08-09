import UploadImage from "../UploadImage/UploadImage"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, MenuItem, Chip } from '@mui/material';
import Navbar from '../Navbar/Navbar.jsx';
import { changeProfileAsync } from "../../redux/profile/profileThunks";
import { loginSuccess } from "../../redux/auth/authThunks";
import './Login.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

import logo from '../../assets/logo.png'


export default function Login() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [displayError, setDisplayError] = React.useState(false);
    const [errorText, setErrorText] = React.useState('Error');


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleEmailChange = event => {
        setDisplayError(false);
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (!response.ok) {
                const data = await response.json();
                setDisplayError(true);
                setErrorText(data.error);
            } else {
                const userData = await response.json();
                setDisplayError(false);
                localStorage.setItem("currentUser", email);
                dispatch(loginSuccess(userData));
                dispatch(changeProfileAsync(userData.profile)).then(() => {
                    navigate('/dashboard');
                    navigate(0);
                })
            }
        } catch (error) {
            alert('Error occurred during login.');
            console.error(error);
        }
    };

    return (
        <div className="LoginScreen">
            <img src={logo} height="100px"></img>
            <div className="LoginContainer">
                <div>
                    <TextField sx={{ m: 1, width: '25ch' }} id="outlined-basic" label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        required={true} />
                </div>
                <div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
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
                            value={password}
                            onChange={handlePasswordChange}
                            required={true}
                        />
                        {displayError && (
                            <FormHelperText error>{errorText}</FormHelperText>
                        )}
                    </FormControl>
                </div>
                <div className="loginButton">
                    <Button sx={{ m: 1, width: '33ch' }} variant="contained" onClick={handleLogin}>Login</Button>
                    <Divider>Or</Divider>
                    <Link to="/signup" style={{ color: 'white' }}>
                        <Button sx={{ m: 1, width: '33ch' }} variant="contained">Sign up</Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}