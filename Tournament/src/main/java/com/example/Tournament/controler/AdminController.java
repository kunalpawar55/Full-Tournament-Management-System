package com.example.Tournament.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Tournament.entity.LoginEntity;
import com.example.Tournament.servise.LoginServiceclass;

@RestController
@RequestMapping("/Admin")
public class AdminController {	
	@Autowired
	LoginServiceclass login;
	
    @GetMapping("/dashboard")
    public String adminDashboard() {
    	
    	
        return "Welcome to Admin Dashboard!";
    }

    @GetMapping("/users")
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
