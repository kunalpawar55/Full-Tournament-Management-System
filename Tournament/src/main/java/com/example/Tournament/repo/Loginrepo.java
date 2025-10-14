package com.example.Tournament.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Tournament.entity.LoginEntity;

public interface Loginrepo extends JpaRepository<LoginEntity, Integer> {

Optional<LoginEntity> findByEmail(String email);
}
