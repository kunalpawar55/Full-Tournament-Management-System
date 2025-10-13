import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import virat from '../Imges/virat.jpg';
import Virat2 from '../Imges/virat2.jpg';



export default function About() {
  return (
    <div>
      <Header />
      
      <Typography variant="h3" sx={{ textAlign: 'center', margin: '20px 0', fontFamily: 'serif', fontWeight: 'bold' }}>
        About Us
      </Typography>

      <Box sx={{ flexGrow: 1, padding: '20px' }}>
        <Grid container spacing={4}>

          {/* Left Side Content */}
          <Grid item xs={12} md={7} sx={{ padding: '20px' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              Welcome to <span style={{ color: 'red' }}>SportsHere.com</span>
            </Typography>
            <Typography variant="h5" sx={{ marginTop: '10px' }}>
              At SportHere.com, we provide a seamless and efficient platform for tournament organizers and sports
              enthusiasts to register, manage, and participate in various tournaments with ease.
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
              Our Mission
            </Typography>
            <Typography variant="h5">
              Our mission is to simplify the tournament management process by offering an intuitive platform that helps
              organizers promote their events and allows players to discover and join tournaments effortlessly.
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
              What We Offer
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="✅ Tournament Registration – Organizers can register their tournaments with all necessary details." primaryTypographyProps={{ fontSize: '18px' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="✅ Match Management – Easily manage match schedules, timings, and prize money." primaryTypographyProps={{ fontSize: '18px' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="✅ Search & Join – Players can search for tournaments based on their interests and register." primaryTypographyProps={{ fontSize: '18px' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="✅ Admin Panel – Dedicated admin controls for verifying tournaments and managing data." primaryTypographyProps={{ fontSize: '18px' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="✅ Easy Communication – Direct WhatsApp contact with organizers for instant queries." primaryTypographyProps={{ fontSize: '18px' }} />
              </ListItem>
            </List>
          </Grid>

          {/* Right Side Image */}
          <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
            <img src={virat} alt="Virat" style={{ width: '100%', maxWidth: '450px', height: 'auto', borderRadius: '10px' }} />
          </Grid>

          {/* Another Image */}
          <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
            <img src={Virat2} alt="Virat 2" style={{ width: '100%', maxWidth: '350px', height: '450px', borderRadius: '10px' }} />
          </Grid>

          {/* Why Choose Us Section */}
          <Grid item xs={12} md={7}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              Why Choose Us?
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="🚀 User-Friendly Interface – Simple and easy-to-use platform." primaryTypographyProps={{ fontSize: '18px' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="📅 Efficient Scheduling – No manual efforts, everything is automated." primaryTypographyProps={{ fontSize: '18px' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="📢 Wider Reach – Get more players to join your tournament." primaryTypographyProps={{ fontSize: '18px' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔒 Secure & Reliable – Data security and privacy are our top priorities." primaryTypographyProps={{ fontSize: '18px' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="🎉 Join SportsHere.com today and take your tournament experience to the next level!" primaryTypographyProps={{ fontSize: '18px', fontWeight: 'bold', color: 'green' }} />
              </ListItem>
            </List>
          </Grid>

        </Grid>
      </Box>

      <Footer />
    </div>
  );

   

}
