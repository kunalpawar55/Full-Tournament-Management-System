import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { Box, FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import '../CSS/Getpomp.css';

export default function FetchImages() {
  const [showdata, setdata] = useState([]);
  const [sportName, setSportName] = useState("All");

  useEffect(() => {
    axios
      .get('http://localhost:8080/GetAllImage')
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredImages = sportName === "All" ? showdata : showdata.filter((image) => image.sportImageName === sportName);

  return (
    <div>
      <Header />
      <div className="image" style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Get Your Sport Invitation</h1>

        <Box sx={{ width: 300, margin: 'auto', marginBottom: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="sport-select-label">Search Sport</InputLabel>
            <Select
              labelId="sport-select-label"
              id="sport-select"
              value={sportName}
              onChange={(e) => setSportName(e.target.value)}
              label="Sport Name"
            >
              <MenuItem value="All">All</MenuItem>
              {["Kabaddi", "Kho-Kho", "Wrestling", "Football", "Cricket", "Volleyball", "Badminton"].map((sport) => (
                <MenuItem key={sport} value={sport}>
                  {sport}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {filteredImages.length > 0 ? (
            filteredImages.map((image) => (
              <div key={image.id} style={{ textAlign: "center" }}>
                <img
                  src={`data:${image.type};base64,${image.contain}`}
                  alt={image.name}
                  style={{ width: "400px", height: "400px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
                />
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  href={`data:${image.type};base64,${image.contain}`}
                  download={image.name}
                  style={{ marginTop: "10px" }}
                >
                  Download
                </Button>
              </div>
            ))
          ) : (
            <h3>No Images Available</h3>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
