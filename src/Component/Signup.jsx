import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../CSS/Signup.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, TextField, Alert } from '@mui/material';

export default function Signup() {
  const [fullname, setFullname] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState('success');
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const logindata = {
      dob: dob.trim(),
      email: email.trim(),
      fullName: fullname.trim(),
      number: mobile.trim(),
      password: password,
      user: "User"
    };

    if (logindata.password.length < 10) {
      setMsg("Password must be at least 10 characters long!");
      setMsgType("error");
      setShowAlert(true);
      return;
    }

    if (logindata.number.length !== 10 ) {
      setMsg(" Mobile number must be exactly 10 digits!");
      setMsgType("error");
      setShowAlert(true);
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.get('http://localhost:8080/get-all');
      const users = response.data;
      const user = users.find((user) => user.email === logindata.email);

      if (!user) {
        await axios.post('http://localhost:8080/Login', logindata);
        setMsg("Signup Successful! Redirecting...");
        setMsgType("success");
        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
          navigate('/');
        }, 2000);
      } else {
        setMsg("Email is already registered!");
        setMsgType("error");
        setShowAlert(true);
      }
    } catch (error) {
      setMsg("Error occurred while signing up!");
      setMsgType("error");
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  const colform = {
    '& label': { color: 'white' },
    '& .MuiInput-underline:before': { borderBottom: '1px solid white' },
    '& .MuiInput-underline:after': { borderBottom: '2px solid white' },
    input: { color: 'white' }
  };

  return (
    <div>
      <Header />
      <div className="signup">
        <div className="form-container">
          <h1>Sign-Up</h1>

          {showAlert && (
            <Alert severity={msgType} style={{ marginBottom: '10px' }}>
              {msg}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              id="fullname"
              name="fullname"
              variant="standard"
              label="Full Name"
              sx={{ ...colform, width: '100%' }}
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
            <br />

            <TextField
              type="date"
              id="birthdate"
              name="birthdate"
              variant="standard"
              sx={{ ...colform, width: '100%' }}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <br />

            <TextField
              type="email"
              id="email"
              name="email"
              variant="standard"
              label="Email"
              sx={{ ...colform, width: '100%' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />

            <TextField
              type="tel"
              id="mobile"
              name="mobile"
              variant="standard"
              label="Mobile Number"
              placeholder="Enter your 10-digit mobile number"
              sx={{ ...colform, width: '100%' }}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <br />

            <TextField
              type="password"
              id="password"
              name="password"
              variant="standard"
              label="Password"
              placeholder="At least 10 characters"
              sx={{ ...colform, width: '100%' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: '10px' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
