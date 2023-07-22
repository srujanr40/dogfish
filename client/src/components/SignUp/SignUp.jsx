import UploadImage from "../UploadImage/UploadImage";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, MenuItem, Chip } from '@mui/material';
import Navbar from '../Navbar/Navbar.jsx';
import { updateProfileAsync } from "../../redux/profile/profileThunks";
import './SignUp.css'

import logo from '../../assets/logo.png'


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
import { useNavigate } from 'react-router-dom';

import { setEmail, setPassword, signUpAsync } from '../../redux/auth/authThunks';

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const navigate = useNavigate();



  const dispatch = useDispatch();

  const handleEmailChange = event => {
    dispatch(setEmail(event.target.value)); // Dispatch the setEmail action
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignUp = async () => {
    try {
      await dispatch(signUpAsync(email, password));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };


  const isPasswordMatch = password === confirmPassword;

  return (
    <div className="SignUpScreen">
      <img src={logo} height="100px"></img>
      <div className="SignUpContainer">
        <div>
          <TextField
            sx={{ m: 1, width: '25ch' }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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
              value={password}
              onChange={handlePasswordChange}
            />
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
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
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {!isPasswordMatch && (
              <FormHelperText error>Passwords do not match</FormHelperText>
            )}
          </FormControl>
        </div>
        <div className="SignUpButton">
          <Button
            sx={{ m: 1, width: '33ch' }}
            variant="contained"
            onClick={handleSignUp}
            disabled={!isPasswordMatch}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
