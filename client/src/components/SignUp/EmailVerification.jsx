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

  const handleCodeVerification = async (email) => {
    try {
        const email = new URLSearchParams(location.search).get('email');
        const url = `${process.env.REACT_APP_REST_API_URL}/auth/verify_email`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email,
              enteredCode
          })
      });


      if (!response.ok) {
          const data = await response.json();
          console.log(data.error)
      } else {
          navigate('/dashboard');
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
