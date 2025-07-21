package com.example.Tournament.servise;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.example.Tournament.entity.ImageEntity;
import com.example.Tournament.repo.ImageRepo;

@Service
public class ImageService {
    @Autowired
    ImageRepo repo;

    public ImageEntity savedoc(MultipartFile file, String sportName) {
        String filename = file.getOriginalFilename();
        try {
            System.out.println("Uploading file: " + filename);

            ImageEntity doc = new ImageEntity();
            doc.setName(filename);
            doc.setType(file.getContentType());
            doc.setContain(file.getBytes());
            doc.setSportImageName(sportName); // Sport Name को सेट किया

            System.out.println("File content read: " + doc.getContain().length + " bytes");

            return repo.save(doc);
        } catch (Exception e) {
            System.err.println("Error in saving document: " + e.getMessage());
            throw new RuntimeException("Failed to save document", e);
        }
    }

    public List<ImageEntity> getAllData() {
        return repo.findAll();
    }

    public void deleteById(long id) {
        if (repo.findById(id).isEmpty()) {
            throw new RuntimeException("ID Not Found");
        }
        repo.deleteById(id);
    }
}