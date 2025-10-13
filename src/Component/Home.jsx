import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../CSS/Home.css';
import Getpromo from './Getpromo';
import NewsAPi from './NewsAPi';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HighpaidMatches from './HighPaidMatches/HighpaidMatches';

export default function Home() {
  const [matchData, setMatchData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const btn1={
      
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: 'aliceblue',
      color: 'black',
      boxShadow: '5px 7px 0 0 white',
      transition: '0.5s ease-in-out',
      
    }

  }
  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((response) => response.json())
      .then((finalData) => {
        setMatchData(finalData);
        setFilteredData(finalData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

 const handleWhatsAppClick = (contactNumber) => {

  if (user) {
    const message = `Hello ${user.name}! I am interested in this tournament.`;
    const whatsappURL = `https://wa.me/91${contactNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  } else {
    alert("Please login first to contact via WhatsApp.");
  }
};

  const handelPrize = () => {
    setFilteredData(matchData.filter((item) => item.first_Prize > 50000));
  };

  const handelAllData = () => {
    setFilteredData(matchData);
  };

  const tomorrow = () => {
    const today = new Date();
    const tomorrowDate = new Date(today);
    tomorrowDate.setDate(today.getDate() + 1);
    const tomorrowString = tomorrowDate.toISOString().split('T')[0];
    setFilteredData(matchData.filter((item) => item.date === tomorrowString));
  };

  const filterBySport = (sport) => {
    setFilteredData(matchData.filter((item) => item.sport_Name === sport));
  };
const buttonList = [
  { spname: 'All Match', onClick: handelAllData },
  { spname: 'High Prize', onClick: handelPrize },
  { spname: 'Tomorrow', onClick: tomorrow },
  { spname: 'Cricket', onClick: () => filterBySport('Cricket') },
  { spname: 'Football', onClick: () => filterBySport('Football') },
  { spname: 'Kabaddi', onClick: () => filterBySport('Kabaddi') },
  { spname: 'Basketball', onClick: () => filterBySport('Basketball') },
];

  return (
    <div>
      <Header />
     <Grid container spacing={2} justifyContent="center" sx={{ mt: 2, mb: 3 }} flexWrap="wrap">
  {buttonList.map((btn, index) => (
    <Grid item key={index}>
      <Button sx={btn1} variant="contained" onClick={btn.onClick}>
        {btn.spname}
      </Button>
    </Grid>
  ))}
</Grid>

      <div className="home-container">
        <Typography variant="h4" align="center" sx={{color:'white',fontFamily:'serif'}} gutterBottom>Upcoming Matches</Typography>

        <Grid container spacing={3} justifyContent="center">
          {filteredData.length > 0 ? (filteredData.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 275,margin:3, boxShadow: 5,border:'1px solid white', borderRadius: 2,backgroundColor:'rgba(0, 0, 0, 0.16)',color:'white' }}>
                <CardContent>
                  <Typography variant="h5" sx={{textAlign:'center',padding:2}} color="rgb(67, 164, 67)">{item.sport_Name}</Typography>
                  <Typography>Date: {item.date || 'TBD'}</Typography>
                  <Typography>First Prize: ₹{item.first_Prize}</Typography>
                  <Typography>Second Prize: ₹{item.second_prize}</Typography>
                  <Typography>Third Prize: ₹{item.third_prize}</Typography>
                  <Typography>Contact: {user?item.contact_number :'login first  '}</Typography>
                  <Typography>Reporting Time: {item.reportin_Time || 'TBD'}</Typography>
                  <Typography>Entry fees: {item.entryFrres || '0'}</Typography>

                  <Typography >*Highest Age: {item.age} Years</Typography>
                  <Typography >*Highest Weight: {item.weight} Kg</Typography>
                  <Button
                    variant="contained"
                    onClick={() => window.open(item.location, "_blank")}
                    startIcon={<LocationOnIcon />}
                    sx={{backgroundColor:'rgba(0,0,0,0)',border:'1px solid  white','&:hover':{
                      backgroundColor:'GrayText',
                    }}}
                  >
                    Location
                  </Button>
                  <Typography>Address: {item.adress}</Typography>

                  <Accordion sx={{ mt: 1,backgroundColor:'rgba(0,0,0,0)',color:'white',border:'1px solid white'}}>
                    <AccordionSummary  expandIcon={<ExpandMoreIcon /> } >
                      <Typography variant="h6" color='white'>Terms & Conditions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography color='whitex'>{item.description}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>

                <CardActions>
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<WhatsAppIcon />}
                    fullWidth
                    onClick={() => handleWhatsAppClick(item.contact_number)}
                  >
                    Contact via WhatsApp
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))) : (
            <Grid container spacing={3} justifyContent="center">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Stack spacing={2} sx={{ width: '100%', maxWidth: 310 }}>
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                    <Skeleton variant="circular" width={60} height={60} />
                    <Skeleton variant="rectangular" width="100%" height={60} />
                    <Skeleton variant="rounded" width="100%" height={60} />
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </div>
<HighpaidMatches/>

      <NewsAPi />
      <Footer />
    </div>
  );
}
