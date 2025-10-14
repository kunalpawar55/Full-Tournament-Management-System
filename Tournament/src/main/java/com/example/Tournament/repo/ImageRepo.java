package com.example.Tournament.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Tournament.entity.ImageEntity;

public interface ImageRepo extends JpaRepository<ImageEntity, Long> {

}
