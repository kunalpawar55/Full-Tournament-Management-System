package com.example.Tournament.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Tournament.entity.LoginEntity;

public interface Loginrepo extends JpaRepository<LoginEntity, Integer> {

}
