import axios from 'axios';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import '../CSS/Login.css';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState('success');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = localStorage.getItem('user');
    if (existingUser) {
      setMsg('User already logged in! Please logout first.');
      setMsgType('error');
      return;
    }

    axios
      .get('http://localhost:8080/get-all') // Ensure backend endpoint correct hai
      .then((response) => {
        const users = response.data;

        // Backend ke fields ke hisaab se
        const user = users.find(
          (u) =>
            u.email === email &&
            u.password === password &&
            u.user.toLowerCase() === 'user'
        );
        const admin = users.find(
          (u) =>
            u.email === email &&
            u.password === password &&
            u.user.toLowerCase() === 'admin'
        );

        if (user) {
          localStorage.setItem(
            'user',
            JSON.stringify({
              role: 'user',
              email: user.email,
              name: user.fullName || 'User',
            })
          );

          setMsg(`Hello, ${user.fullName || 'User'}!`);
          setMsgType('success');
          setTimeout(() => navigate('/'), 2000);

        } else if (admin) {
          localStorage.setItem(
            'user',
            JSON.stringify({
              role: 'admin',
              email: admin.email,
              name: admin.fullName || 'Admin',
            })
          );

          setMsg(`Hello, ${admin.fullName || 'Admin'}!`);
          setMsgType('success');
          setTimeout(() => navigate('/admin'), 2000);

        } else {
          setMsg('Invalid email or password! Please try again.');
          setMsgType('error');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMsg('An error occurred while fetching data.');
        setMsgType('error');
      });
  };

  return (
    <div>
      <Header />
      <div className="login">
        <h1 style={{ color: 'white', marginBottom: '20px' }}>Login</h1>

        {msg && (
          <Alert
            severity={msgType}
            style={{ marginBottom: '15px', fontWeight: 'bold' }}
          >
            {msg}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="standard"
            sx={{
              width: '100%',
              color: 'white',
              '& label': { color: 'white' },
              '& .MuiInput-underline:before': { borderBottom: '1px solid white' },
              '& .MuiInput-underline:after': { borderBottom: '2px solid white' },
              input: { color: 'white' },
              marginBottom: '20px',
            }}
            required
          />

          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="standard"
            sx={{
              width: '100%',
              color: 'white',
              '& label': { color: 'white' },
              '& .MuiInput-underline:before': { borderBottom: '1px solid white' },
              '& .MuiInput-underline:after': { borderBottom: '2px solid white' },
              input: { color: 'white' },
              marginBottom: '25px',
            }}
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: '100%',
              background: 'linear-gradient(to right, rgb(255, 0, 0) 40%, rgb(5, 5, 5) 70%)',
              color: 'white',
              padding: '10px 0',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(to right, rgb(0, 0, 0) 40%, rgb(157, 26, 26) 70%)',
                color: 'white',
                boxShadow: '0 4px 12px rgba(255, 255, 255, 0.47)',
                transition: '0.5s ease-in-out',
              },
            }}
          >
            Login
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
