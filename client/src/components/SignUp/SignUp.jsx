import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { addProfileAsync } from "../../redux/profile/profileThunks";
import './SignUp.css'

import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from "../../redux/auth/authThunks";

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('Error');
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleEmailChange = event => {
    setDisplayError(false); 
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const dispatch = useDispatch();

  const handleSignUp = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      setDisplayError(false);
      const data = await response.json();

      if (!response.ok) {
        setDisplayError(true);
        setErrorText(data.error);
      } else {
        localStorage.setItem("currentUser", data.profile.email);
        dispatch(loginSuccess(data));
        dispatch(addProfileAsync(data.profile)).then(() => {
          navigate('/profile');
          navigate(0);
        })
      }
    } catch (error) {
      alert(error);
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
            required={true}
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
              required={true}
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
              label="Confirm rPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required={true}
            />
            {!isPasswordMatch && (
              <FormHelperText error>Passwords do not match</FormHelperText>
            )}
            {displayError && (
              <FormHelperText error>{errorText}</FormHelperText>
            )}
          </FormControl>
        </div>
        <div className="SignUpButton">
          <Button
            sx={{ m: 1, width: '33ch' }}
            variant="contained"
            onClick={handleSignUp}
            disabled={!isPasswordMatch || !email || !confirmPassword}
          >
            Sign up
          </Button>
          <Divider>Or</Divider>
          <Link to="/login" style={{ color: 'white' }}>
            <Button sx={{m: 1, width: '33ch' }} variant="contained">Back to Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
