import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import './SignUp.css'
import { Button } from '@mui/material';

function EmailVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const [enteredCode, setEnteredCode] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  useEffect(() => {
    const email = new URLSearchParams(location.search).get('email');
    fetchUserProfile(email);
  }, [location]);

  const fetchUserProfile = async (email) => {
    try {
        const url = `${process.env.REACT_APP_REST_API_URL}/profile?email=${encodeURIComponent(email)}`;
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
      if (data) {
        setVerificationCode(data.verificationCode);
      } else {
        throw new Error('Profile not found');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCodeVerification = () => {
    try {
      if (enteredCode === verificationCode) {
        navigate('/profile');
      } else {
        alert('Incorrect verification code. Please try again.');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCodeChange = (event) => {
    setEnteredCode(event.target.value);
  };

  return (
    <div className="SignUpScreen">
      <div className="SignUpContainer">
      <InputLabel className="verification-label">
          Verification code sent to your email. Check your inbox.
        </InputLabel>
        <Input
          type="text"
          value={enteredCode}
          onChange={handleCodeChange}
          placeholder="Enter verification code"
          className="verification-input"
        />
        <Button
          variant="contained"
          onClick={handleCodeVerification}
          className="verify-button"
        >
          Verify Code
        </Button>
      </div>
    </div>
  );
}

export default EmailVerification;
