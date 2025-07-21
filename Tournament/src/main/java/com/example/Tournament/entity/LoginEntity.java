package com.example.Tournament.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table
@Entity
public class LoginEntity {
 
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column
	private String Fullname;
	@Column
	private String DOB;
	@Column
	private String Email;
	@Column
    private long Number;
	@Column
    private String Password;
	@Column
	private String User;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFullname() {
		return Fullname;
	}
	public void setFullname(String fullname) {
		Fullname = fullname;
	}
	public String getDOB() {
		return DOB;
	}
	public void setDOB(String dOB) {
		DOB = dOB;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public long getNumber() {
		return Number;
	}
	public void setNumber(long number) {
		Number = number;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getUser() {
		return User;
	}
	public void setUser(String user) {
		User = user;
	}
	public LoginEntity(String fullname, String dOB, String email, long number, String password, String user) {
		super();
		Fullname = fullname;
		DOB = dOB;
		Email = email;
		Number = number;
		Password = password;
		User = user;
	}
	
	public LoginEntity() {
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "LoginEntity [id=" + id + ", Fullname=" + Fullname + ", DOB=" + DOB + ", Email=" + Email + ", Number="
				+ Number + ", Password=" + Password + ", User=" + User + "]";
	}	
}
