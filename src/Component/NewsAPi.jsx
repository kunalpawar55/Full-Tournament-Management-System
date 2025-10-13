import React from "react";
import { sportData } from "../SportsmanData/Sportdata";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  List,
  ListItem,
} from "@mui/material";

export default function NewsAPi() {
  return (
    <Box sx={{ padding: 2, background: 'linear-gradient(to right, rgb(0, 0, 0) 40%, rgb(157, 26, 26) 70%)',
    backdropFilter: 'blur(10px)',}} >
      <Grid container spacing={2} justifyContent="center">
        {sportData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 280, boxShadow: '0px 0px 12px 1px white', borderRadius: 3 ,backgroundColor:'rgba(0,0,0,0)'}}>
              <CardMedia
                component="img"
                height="200"
                image={item.img}
                alt={item.name}
                
              />
              <CardContent sx={{color:'white'}}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" >
                  <strong>Sport:</strong> {item.sport}
                </Typography>
                <Typography variant="body2">
                  <strong>Nickname:</strong> {item.nickname}
                </Typography>
                <Typography variant="body2">
                  <strong>Country:</strong> {item.country}
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 1 }}>
                  Achievements:
                </Typography>
                <List dense>
                  {item.achievements.map((ach, i) => (
                    <ListItem key={i} sx={{ paddingLeft: 2 }}>
                      • {ach}
                    </ListItem>
                  ))}
                </List>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  <strong>Biopic:</strong> {item.biopic}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
