import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Button, Typography, Container } from '@mui/material';
import Header from '../Header.jsx';
import axios from 'axios';
import AdminDashboard from './AdminDashboard.jsx';
import Footer from '../Footer.jsx'
export default function ImageAdminPanel() {
    const [showimg, setimg] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/GetAllImage')
            .then((response) => setimg(response.data))
            .catch((err) => console.log(err));
    }, []);

    const ondelete = (myid) => {
        axios.delete(`http://localhost:8080/DeleteImage/${myid}`)
            .then(() => {
                setimg(showimg.filter((image) => image.id !== myid)); 
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <Header />
            <AdminDashboard/>
            <Container sx={{ mt: 3 }}>
              <Typography >Image Change</Typography>
                <Grid container spacing={3} justifyContent="center">
                    {showimg.map((image) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
                            <Card sx={{  display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={`data:${image.type};base64,${image.contain}`}
                                    alt={image.name}
                                    sx={{ objectFit: 'cover', width: '100%' }}
                                />
                                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                </CardContent>
                                <Button
                                    variant="contained"
                                    color="error"
                                    fullWidth
                                    onClick={() => ondelete(image.id)}
                                    sx={{ borderRadius: 0 }}
                                >
                                    Delete
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <br />
            <Footer/>
        </div>
    );
}
 