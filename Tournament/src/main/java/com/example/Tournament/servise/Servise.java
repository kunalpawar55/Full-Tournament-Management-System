package com.example.Tournament.servise;

import java.util.List;

import com.example.Tournament.entity.tournamentEntity;


public interface Servise {

	public tournamentEntity Createacc(tournamentEntity entity);
	public List<tournamentEntity> getall( );
	public tournamentEntity getId(Integer id);
	public tournamentEntity putacc(Integer id,tournamentEntity entity);
	public void deleteacc(Integer id);
	
}
