package com.example.Tournament.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Tournament.entity.tournamentEntity;
import com.example.Tournament.servise.Servise;
import com.example.Tournament.servise.tournament_Implimentation;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class Controler {

	@Autowired
tournament_Implimentation tour;
	
	@PostMapping
	public ResponseEntity<tournamentEntity> postall(@RequestBody tournamentEntity en)
	{
		tournamentEntity en1= tour.Createacc(en);
		return ResponseEntity.status(HttpStatus.CREATED).body(en1);
		
	}
	
	@GetMapping
	public List<tournamentEntity> getall() {
		
		List<tournamentEntity>alldata=tour.getall();
		
		return alldata;
	}
	@GetMapping("/getid/{myid}")
	
	public tournamentEntity getid(@PathVariable("myid")Integer id)
	{
		
		return tour.getId(id);

		
	}
	
	@PutMapping("/put/{myid}")
	public tournamentEntity putall(@PathVariable("myid")Integer id,@RequestBody tournamentEntity entity ) {
		
		
		return  tour.putacc(id, entity);
		
	}
	@DeleteMapping("/Delete/{id}")
	public ResponseEntity<String> deleteid(@PathVariable Integer id) {
	    tour.deleteacc(id);
	    return ResponseEntity.status(HttpStatus.NO_CONTENT).body("ACCOUNT CLOSED");
	}
	

	
}
