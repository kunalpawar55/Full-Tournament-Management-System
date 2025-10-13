import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
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
import { Link } from 'react-router-dom';
import FullAdminPanel from './FullAdminPanel';

export default function AdminDashboard() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => {
        setDrawerOpen(open);
      };

      
      return (
    <div>
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
          <ListItem component={Link} to={'/Admin'} sx={{ textDecoration: 'none', color: 'inherit' }}>
  <ListItemIcon sx={{ color: 'blue' }}>
    <DashboardIcon />
  </ListItemIcon>
  <ListItemText primary="Admin Dashboard" />
</ListItem>

            <ListItem button component={Link} to={'/'}>
            <ListItemIcon sx={{color:'blue'}}><HomeIcon/> </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to={'/User'} >
            <ListItemIcon sx={{color:'blue'}}><SearchOutlinedIcon/> </ListItemIcon>

              <ListItemText primary="User"  />
            </ListItem>
            <ListItem button component={Link} to={'/Addtournament'} >
            <ListItemIcon sx={{color:'blue'}}><AddIcon/> </ListItemIcon>

              <ListItemText primary="Addtournament" />

            </ListItem>
            <ListItem button component={Link} to={'/ImageAdmin'} >
            <ListItemIcon sx={{color:'blue'}}><ImageIcon/> </ListItemIcon>

              <ListItemText primary="Image Panel" />

            </ListItem>


          </List>
        </Box>
      </Drawer>

                  <FullAdminPanel/>


    </div>
  )
}
