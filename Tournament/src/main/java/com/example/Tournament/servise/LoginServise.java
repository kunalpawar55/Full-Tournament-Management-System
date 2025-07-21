package com.example.Tournament.servise;

import java.util.List;

import com.example.Tournament.entity.LoginEntity;

public interface LoginServise {
 
	public LoginEntity createlog(LoginEntity log) ;
	public List<LoginEntity> getlogin();
	public LoginEntity putlog(Integer id,LoginEntity log);
	
	
	 
}
