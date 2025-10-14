package com.example.Tournament.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Tournament.entity.LoginEntity;
import com.example.Tournament.servise.LoginServiceclass;

@RestController
@CrossOrigin(origins = "http://localhost:8081")

public class LoginControler {
     
	@Autowired
	LoginServiceclass login;
	
	@PostMapping("/Login")
	private ResponseEntity<LoginEntity>createlog(@RequestBody LoginEntity log)
	{
		LoginEntity log1=login.createlog(log);
		
		
		
		
		return  ResponseEntity.status(HttpStatus.CREATED).body(log1);
		
	}
	 @GetMapping("/get-all")
	    public ResponseEntity<List<LoginEntity>> getAll() {
	        try {
	            List<LoginEntity> allData = login.getlogin();
	            return ResponseEntity.ok(allData);
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                                 .body(null); 
	        }
	    }
	@DeleteMapping("/Delete-id/{myid}")
	public void DeleteID(@PathVariable int myid)
	{
		 login.deleteacc(myid);
	}
}
