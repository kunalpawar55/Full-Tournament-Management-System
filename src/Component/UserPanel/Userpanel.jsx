import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Modal,
  TextField
} from '@mui/material';

export default function Userpanel() {
  const [showdatauser, setdatauser] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({});
  
  const user = JSON.parse(localStorage.getItem('user'));
  const useremail = user?.email;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:8080/")
      .then((response) => setdatauser(response.data))
      .catch((err) => console.log(err));
  };

  const finaluserdata = showdatauser.filter((item) => item.email === useremail);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setFormData(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/put/${selectedItem.id}`, formData);
      alert("✅ Match updated successfully!");
      handleClose();
      fetchData();
    } catch (err) {
      console.log(err);
      alert(" Update failed!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this match?")) return;
    try {
      await axios.delete(`http://localhost:8080/Delete/${id}`);
      alert(" Match deleted successfully!");
      fetchData();
    } catch (err) {
      console.log(err);
      alert(" Failed to delete match!");
    }
  };

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
                    color: 'white',
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

                    <Typography><strong>Date:</strong> {item.date}</Typography>
                    <Typography><strong>Contact:</strong> {item.contact_number}</Typography>
                    <Typography><strong>First Prize:</strong> ₹{item.first_Prize}</Typography>
                    <Typography><strong>Second Prize:</strong> ₹{item.second_prize}</Typography>
                    <Typography><strong>Third Prize:</strong> ₹{item.third_prize}</Typography>
                    <Typography><strong>Address:</strong> {item.adress}</Typography>
                    <Typography><strong>Description:</strong> {item.description}</Typography>
                    <Typography><strong>Entry Fees:</strong> ₹{item.entryFrres}</Typography>

                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                      <Button
                        sx={{ border: '1px solid white', color: 'white' }}
                        onClick={() => handleOpen(item)}
                      >
                        Update
                      </Button>
                      <Button
                        sx={{ border: '1px solid red', color: 'red' }}
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </Box>
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

      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          width: 400,
          margin: '100px auto'
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Update Match</Typography>

          <TextField fullWidth margin="dense" label="Sport Name" name="sport_Name" value={formData.sport_Name || ''} onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Date" name="date" value={formData.date || ''} onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Contact Number" name="contact_number" value={formData.contact_number || ''} onChange={handleChange} />
          <TextField fullWidth margin="dense" label="First Prize" name="first_Prize" value={formData.first_Prize || ''} onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Second Prize" name="second_prize" value={formData.second_prize || ''} onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Third Prize" name="third_prize" value={formData.third_prize || ''} onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Address" name="adress" value={formData.adress || ''} onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Description" name="description" value={formData.description || ''} onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Entry Fees" name="entryFrres" value={formData.entryFrres || ''} onChange={handleChange} />

          <Button variant="contained" sx={{ mt: 2 }} fullWidth onClick={handleUpdate}>
            Save Changes
          </Button>
        </Box>
      </Modal>

      <Footer />
    </div>
  );
}
