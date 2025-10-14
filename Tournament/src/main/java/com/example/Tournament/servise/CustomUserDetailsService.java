package com.example.Tournament.servise;
/*

import com.example.Tournament.entity.LoginEntity;
import com.example.Tournament.repo.Loginrepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private Loginrepo loginRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        LoginEntity user = loginRepo.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password("{noop}" + user.getPassword())   // abhi plain-text password
                .roles(user.getUser().toUpperCase())       // roles: "ADMIN" ya "USER"
                .build();
    }
}*/
