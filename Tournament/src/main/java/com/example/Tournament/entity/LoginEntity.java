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

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String dob;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private long number;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String user; 

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getNumber() {
        return number;
    }

    public void setNumber(long number) {
        this.number = number;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public LoginEntity(String fullName, String dob, String email, long number, String password, String user) {
        this.fullName = fullName;
        this.dob = dob;
        this.email = email;
        this.number = number;
        this.password = password;
        this.user = user;
    }

    public LoginEntity() {
    }

    @Override
    public String toString() {
        return "LoginEntity{" +
                "id=" + id +
                ", fullName='" + fullName + '\'' +
                ", dob='" + dob + '\'' +
                ", email='" + email + '\'' +
                ", number=" + number +
                ", password='" + password + '\'' +
                ", user='" + user + '\'' +
                '}';
    }
}
