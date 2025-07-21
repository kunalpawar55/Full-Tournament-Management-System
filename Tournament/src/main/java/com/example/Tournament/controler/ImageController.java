package com.example.Tournament.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.Tournament.entity.ImageEntity;
import com.example.Tournament.servise.ImageService;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class ImageController {

    @Autowired
    private ImageService ser;
    @PostMapping("/UploadImage")
    public ResponseEntity<String> saveImage(
            @RequestParam("Doc") MultipartFile file,
            @RequestParam("sportname") String sportName) {
        try {
            ImageEntity pr = ser.savedoc(file, sportName);
            return ResponseEntity.ok().body("Image uploaded successfully: " + pr.getName());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error uploading image: " + e.getMessage());
        }
    }

    @GetMapping("/GetAllImage")
    public List<ImageEntity> Getall()
    {
    	return ser.getAllData();
    }
    @DeleteMapping("/DeleteImage/{myid}")
    public void deleteimage(@PathVariable long myid)
    {
    	 ser.deleteById(myid);
    }
    
    
}
