package com.example.Tournament.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Tournament.entity.tournamentEntity;


public interface tournamentREpo extends JpaRepository<tournamentEntity, Integer> {

	
	List<tournamentEntity> findByEmail(String email);
	
	
}
