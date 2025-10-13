import React, { useState } from 'react';
import '../CSS/AddImage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function AddPomplate() {
  const [file, setFile] = useState(null);
  const [sportName, setSportName] = useState("");
  let navigate = useNavigate();

    
   const user=JSON.parse( localStorage.getItem('user'));
   const email=user?user.email:null;

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file || !sportName) {
      alert('Please select a file and enter a sport name.');
      return;
    }
  
    try {
      if(user){
      const formData = new FormData();
      formData.append('Doc', file);
      formData.append('sportname', sportName);  
  
      const { data } = await axios.post('http://localhost:8080/UploadImage', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      console.log('File uploaded successfully:', data);
      alert('File uploaded successfully!');
      navigate("/");
    }
    else{
      alert("Login First")
      navigate('/login');
    }
   }
    catch (error) {
      console.error('Error uploading file:', error);
      alert('File upload failed.');
    }
  
  };

  return (
    <div className="addimage" style={{ background:' linear-gradient(to right, rgb(0, 0, 0) 40%, rgb(157, 26, 26) 70%)'
}}>
      <h1 style={{color:'white'}}>Upload Image</h1>
      
       <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color:'white'}}>Select Sport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sportName}
          label="Sport Name"
          onChange={(e) => setSportName(e.target.value)}
        >
           {["Kabaddi", "Kho-Kho", "Wrestling", "Football", "Cricket", "Volleyball", "Badminton"].map((sport) => (
                        <MenuItem key={sport} value={sport}>
                          {sport}
                        </MenuItem>
                      ))}
        </Select>
      </FormControl>
    </Box>
      <input type="file" onChange={handleFileChange} required />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}