import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function HighpaidMatches() {
  const [shoematch, setmatch] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/GetAllImage")
      .then((res) => setmatch(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box sx={{ width: '100%', margin: 'auto',paddingBottom:'10px' }}>
      <Swiper
        modules={[Navigation,Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        navigation={true} 
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {shoematch.map((image, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={`data:${image.type};base64,${image.contain}`}
                alt={image.name}
                style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '12px' }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
