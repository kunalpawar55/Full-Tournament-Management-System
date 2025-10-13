import React, { useEffect, useState } from "react";
import "../CSS/Getpromo.css";
import { useNavigate } from "react-router-dom";
import { ImageList, ImageListItem, Typography } from "@mui/material";

export default function Getpromo() {
  const [showimage, setimage] = useState([]);
  let navigate=useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/GetAllImage")
      .then((res) => res.json())
      .then((data) => setimage(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  let onimage=()=>{
    navigate('/GetPomp')
  }

  return (
    <div className="getpromo" style={{ background: 'linear-gradient(to right, rgb(0, 0, 0) 40%, rgb(157, 26, 26) 70%)',
    backdropFilter: 'blur(10px)',}}>
      <Typography  sx={{color:'white',margin:3,fontFamily:'serif'}} variant="h4">Download your Fav Template</Typography>
      <div className="images1">
        
        <ImageList sx={{ width: 1000, height: 650 }} cols={3} rowHeight={64}>
      {showimage.map((image) => (
        <ImageListItem key={image.img}>
                      <img src={`data:${image.type};base64,${image.contain}`} alt={image.name} onClick={onimage} />

        </ImageListItem>
      ))}
    </ImageList>

      </div>
    </div>
  );
}
