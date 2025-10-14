package com.example.Tournament.servise;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Tournament.entity.LoginEntity;
import com.example.Tournament.repo.Loginrepo;

@Service
public class LoginServiceclass implements LoginServise {

	@Autowired
	private Loginrepo logrepo;
	
	
	public LoginEntity createlog(LoginEntity log) {
    
		    
		return logrepo.save(log);
	}

	@Override
	public List<LoginEntity> getlogin() {
		
		return logrepo.findAll();
	}

	@Override
	public LoginEntity putlog(Integer id, LoginEntity log) {
		return null;
	}
	
	public void deleteacc(Integer id )
	{
		if(logrepo.findById(id).isEmpty())
			
		{
			throw new RuntimeException("id Not found");
		}
		logrepo.deleteById(id );
	}
  
}
