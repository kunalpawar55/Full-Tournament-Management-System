import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';

export default function Userpanel() {
  const [showdatauser, setdatauser] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const useremail = user?.email;

  useEffect(() => {
    axios.get("http://localhost:8080/")
      .then((response) => setdatauser(response.data))
      .catch((err) => console.log(err));
  }, []);

  const finaluserdata = showdatauser.filter((item) => item.email === useremail);

  return (
    <div>
      <Header />
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3 }}>
          User Panel
        </Typography>

        {finaluserdata.length > 0 ? (
          <Grid container spacing={3}>
            {finaluserdata.map((item) => (
             <Grid item xs={12} sm={6} md={4} key={item.id}>
  <Card
    sx={{
      minHeight: 250,
      boxShadow: 3,
      borderRadius: 2,
      backgroundColor: 'rgba(255, 255, 255, 0)', 
      border: '2px solid white',
      color:'white'
    }}
  >
    <CardContent>
      <Typography
        variant="h6"
        sx={{ textAlign: 'center', marginBottom: 1, fontWeight: 'bold' }}
        color="primary"
      >
        {item.sport_Name}
      </Typography>

      <Typography><strong>Date:</strong> {item.date || 'TBD'}</Typography>
      <Typography><strong>First Prize:</strong> ₹{item.first_Prize}</Typography>
      <Typography><strong>Second Prize:</strong> ₹{item.second_prize}</Typography>
      <Typography><strong>Third Prize:</strong> ₹{item.third_prize}</Typography>
      <Typography><strong>Contact:</strong> {user ? item.contact_number : 'Login first'}</Typography>
      <Typography><strong>Reporting Time:</strong> {item.reportin_Time || 'TBD'}</Typography>
      <Typography><strong>Entry Fees:</strong> {item.entryFrres || '0'}</Typography>
      <Typography color="error">*Highest Age: {item.age} Years</Typography>
      <Typography color="error">*Highest Weight: {item.weight} Kg</Typography>
    </CardContent>
  </Card>
</Grid>

            ))}
          </Grid>
        ) : (
          <Typography sx={{ textAlign: 'center', marginTop: 5 }}>
            No data found for this user
          </Typography>
        )}
      </Box>
      <Footer />
    </div>
  );
}
