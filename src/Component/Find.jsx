import React, { useEffect, useState } from 'react';
import { Grid, Accordion, AccordionDetails, AccordionSummary, Typography, TextField, Button, Container, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faContactBook } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';

export default function Find() {
  const [matchData, setMatchData] = useState([]);
  const [showSearch, setShowSearch] = useState('');
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((response) => response.json())
      .then((finalData) => setMatchData(finalData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = () => {
    if (showSearch.trim() === '') {
      setIsFiltered(false);
      return;
    }

    const filtered = matchData.filter((item) =>
      item.sport_Name.toLowerCase().includes(showSearch.toLowerCase())
    );

    setFilteredMatches(filtered);
    setIsFiltered(true);
  };

  const handleWhatsAppClick = (contactNumber) => {
    const message = "Hello! I am interested in this tournament.";
    const whatsappURL = `https://wa.me/91${contactNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <Header />
      <Container>
        <Typography variant="h4" sx={{ textAlign: 'center', mt: 3, mb: 2 }}>
          Find Match
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          <TextField
            label="Search by sport name..."
            variant="outlined"
            value={showSearch}
            onChange={(e) => setShowSearch(e.target.value)}
            fullWidth
            sx={{
    input: { color: 'white' }, 
    label: { color: 'white' }, 
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  }}
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>

        <Grid container spacing={3}>
          {(isFiltered ? filteredMatches : matchData).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ minWidth: 275,margin:3, boxShadow: 5,border:'1px solid white', borderRadius: 2,backgroundColor:'rgba(0, 0, 0, 0.16)',color:'white'}}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>{item.sport_Name}</Typography>
                  <Typography>Date: {item.date || 'TBD'}</Typography>
                  <Typography>First Prize: ₹{item.first_Prize}</Typography>
                  <Typography>Second Prize: ₹{item.second_prize}</Typography>
                  <Typography>Third Prize: ₹{item.third_prize}</Typography>
                  <Typography>Contact: {item.contact_number}</Typography>
                  <Typography>Reporting Time: {item.reportin_Time || 'TBD'}</Typography>
                  <Typography sx={{ color: 'red' }}>Highest Age: {item.age} Years</Typography>
                  <Typography sx={{ color: 'red' }}>Highest Weight: {item.weight} Kg</Typography>
                  <Typography>Address: {item.adress}</Typography>
                  <br /><br />

                  <Accordion sx={{ mt: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">Terms & Conditions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{item.description}</Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Button
                    variant="contained"
                    color="success"
                    sx={{ mt: 2 }}
                    startIcon={<FontAwesomeIcon icon={faContactBook} />}
                    onClick={() => handleWhatsAppClick(item.contact_number)}
                  >
                    Contact via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
