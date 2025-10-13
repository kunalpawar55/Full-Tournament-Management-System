
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../CSS/Admin.css";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddIcon from '@mui/icons-material/Add';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function AdminPanel() {
  const [showdata, setdata] = useState([]);
  const [error, setError] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        setdata(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again later.");
      });
  }, []);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
<div
  style={{
    background: "linear-gradient(to right, rgb(0, 0, 0) 40%, rgb(157, 26, 26) 70%)"
  }}
>
      <Header />

      <Button
        onClick={() => toggleDrawer(true)}
        sx={{color:'red'}}
      >
        <MenuIcon fontSize="large" />
      </Button>

      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6" sx={{ textAlign: "center", marginBottom: 2 }}>
            Admin Menu
          </Typography>
          <List>
            <ListItem button component={Link} to={'/Admin'}>
            <ListItemIcon sx={{color:'blue'}}><DashboardIcon/> </ListItemIcon>

              <ListItemText primary="Dashboard"  />
            </ListItem>
            <ListItem button component={Link} to={'/'}>
            <ListItemIcon sx={{color:'blue'}}><HomeIcon/> </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to={'/Find'} >
            <ListItemIcon sx={{color:'blue'}}><SearchOutlinedIcon/> </ListItemIcon>

              <ListItemText primary="Find"  />
            </ListItem>
            <ListItem button component={Link} to={'/Addtournament'} >
            <ListItemIcon sx={{color:'blue'}}><AddIcon/> </ListItemIcon>

              <ListItemText primary="Addtournament" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Typography variant="h2" sx={{ textAlign: "center", my: 2 }}>
        Admin Panel
      </Typography>

      <Box sx={{ padding: 2 }}>
        {error ? (
          <Typography color="error" textAlign="center">
            {error}
          </Typography>
        ) : showdata.length > 0 ? (
          <Grid container spacing={3} justifyContent="center">
            {showdata.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 300, boxShadow: 3, borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{item.sport_Name}</Typography>
                    <Typography variant="body2">
                      <strong>Date:</strong> {item.date || "TBD"}
                    </Typography>
                    <Typography variant="body2">
                      <strong>First Prize:</strong> ₹{item.first_Prize}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Second Prize:</strong> ₹{item.second_prize}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Third Prize:</strong> ₹{item.third_prize}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Contact:</strong> {item.contact_number}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Reporting Time:</strong>{" "}
                      {item.reportin_Time || "TBD"}
                    </Typography>
                    <Typography variant="body2" color="error">
                      <strong>Highest Age:</strong> {item.age} Years
                    </Typography>
                    <Typography variant="body2" color="error">
                      <strong>Highest Weight:</strong> {item.weight} Kg
                    </Typography>
                    <Typography variant="body2">
                      <strong>Address:</strong> {item.adress}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                    >
                      DELETE Match
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography textAlign="center">Loading data...</Typography>
        )}
      </Box>

      <Footer />
    </div>
  );
}
