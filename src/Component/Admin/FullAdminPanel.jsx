import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShowChartIcon from '@mui/icons-material/ShowChart'; // Dummy chart icon
import axios from 'axios';

const StatCard = ({ title, value, percentage, trend, color }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 3,
        boxShadow: 2,
        p: 3,
        minWidth: 250,
        flex: 1,
        mx: 1,
        color:'black'
      }}
    >
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {title}
      </Typography>

      <Typography variant="h4" fontWeight={600}>
        {value}
      </Typography>

      <Box display="flex" alignItems="center" mt={1}>
        {trend === 'up' ? (
          <TrendingUpIcon style={{ color, marginRight: 4 }} />
        ) : (
          <TrendingDownIcon style={{ color, marginRight: 4 }} />
        )}
        <Typography variant="body2" sx={{ color, fontWeight: 500 }}>
          {percentage}
        </Typography>
        <Typography variant="body2" color="black" ml={1}>
          last 7 days
        </Typography>
      </Box>

      <Box mt={2} textAlign="right">
        <ShowChartIcon style={{ color, fontSize: 40 }} />
      </Box>
    </Box>
  );
};

export default function FullAdminPanel() {
  const [showdata, setdata] = useState([]);
  const [showmatchdata,setmatchdata]=useState([])
  const[showimg,setimg]=useState([])
  const userlength = showdata.length;
const allmatch=showmatchdata.length +showimg.length;
  const cardData = [
    {
      title: 'Total active users',
      value: userlength,
      percentage: '+2.6%',
      trend: 'up',
      color: '#22c55e',
    },
    {
      title: 'Total Matches',
      value: allmatch,
      percentage: '+0.2%',
      trend: 'up',
      color: '#0ea5e9',
    },
    {
      title: 'Total downloads',
      value: '678',
      percentage: '-0.1%',
      trend: 'down',
      color: '#f43f5e',
    },
  ];

  useEffect(() => {
    axios
      .get('http://localhost:8080/get-all')
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
       
      axios.get("http://localhost:8080/")
      .then((response) => {
        setmatchdata(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });

       axios.get('http://localhost:8080/GetAllImage')
            .then((response) => setimg(response.data))
            .catch((err) => console.log(err));
  }, []);

  return (
    <Box sx={{ backgroundColor: '#e5e7eb', p: 3 }}>
      <Grid container spacing={2} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item key={index}>
            <StatCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
