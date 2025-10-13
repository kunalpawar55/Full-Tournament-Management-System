import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Diversity3SharpIcon from '@mui/icons-material/Diversity3Sharp';
import LoginIcon from '@mui/icons-material/Login';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import PersonIcon from '@mui/icons-material/Person';

import all from '../Imges/Allsport.png';
import '../CSS/Header/Header.css'
export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openRightDrawer, setOpenRightDrawer] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user?.name;
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
  };

  const openRightDrawerHandler = () => {
    navigate('/UserDadshboard')
  };
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <>
<AppBar
  position="static"
  sx={{
    background: 'linear-gradient(to right, rgb(0, 0, 0) 40%, rgb(157, 26, 26) 70%)',
    backdropFilter: 'blur(10px)',
    padding: '10px 0',
    marginBottom:3,  }}
  className="headertop"
>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
              SportsHere<span style={{ color: 'red' }}>.com</span>
            </Typography>

            <h4 style={{ fontSize: '10px' }}>Hello {username}</h4>

          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/Contact" style={linkStyle}>Contact Us</Link>
            <Link to="/Find" style={linkStyle}>Find</Link>
            <Link to="/About" style={linkStyle}>About Us</Link>
            <Link to="/Sign-up" style={linkStyle}>Sign Up</Link>
            <Link to="/Login" style={linkStyle}>Login</Link>
            <Link to="/Addtournament" style={linkStyle}>Add Tournament</Link>
            <Link to="/GetPomp" style={linkStyle}>Get Image</Link>
            <button onClick={logout}>Logout</button>
            <IconButton onClick={openRightDrawerHandler}>
              <PersonIcon sx={{ color: 'wheat' }} />
            </IconButton>
          </Box>

          <IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { md: 'none' }, color: 'white' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 2 }}>Menu</Typography>
          <List>
            <ListItem button component={Link} to="/" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><HomeIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/Contact" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><ContactPhoneRoundedIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="Contact us" />
            </ListItem>
            <ListItem button component={Link} to="/Find" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><SearchOutlinedIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="Find" />
            </ListItem>
            <ListItem button component={Link} to="/About" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><Diversity3SharpIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="About-us" />
            </ListItem>
            <ListItem button component={Link} to="/Sign-up" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><AddReactionIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="Sign up" />
            </ListItem>
            <ListItem button component={Link} to="/Login" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><LoginIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/Addtournament" onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><LoginIcon sx={{ color: 'blue' }} /></ListItemIcon>
              <ListItemText primary="Tournament Add" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      
      <Box sx={{ width: '100%' }}>
        <img src={all} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </>
  );
}
