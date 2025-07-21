package com.example.Tournament.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Tournament.entity.tournamentEntity;


public interface tournamentREpo extends JpaRepository<tournamentEntity, Integer> {

	
	
}
