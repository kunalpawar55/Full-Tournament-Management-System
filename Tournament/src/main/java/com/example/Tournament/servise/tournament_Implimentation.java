package com.example.Tournament.servise;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.Tournament.entity.tournamentEntity;
import com.example.Tournament.repo.tournamentREpo;

@Service
public class tournament_Implimentation implements Servise {

    @Autowired
    private tournamentREpo repo;

    @Override
    public tournamentEntity Createacc(tournamentEntity tour) {
        return repo.save(tour);
    }

    @Override
    public List<tournamentEntity> getall() { 
        return repo.findAll();
    }

    @Override
    public tournamentEntity getId(Integer id) {
        Optional<tournamentEntity> findid = repo.findById(id);
        if (findid.isEmpty()) {
            throw new RuntimeException("Id not found");
        }
        return findid.get();
    }

    @Override
    @Transactional
    public tournamentEntity putacc(Integer id, tournamentEntity entity) {
        Optional<tournamentEntity> existingEntityOpt = repo.findById(id);
        
        if (existingEntityOpt.isEmpty()) {
            throw new RuntimeException("Id not found");
        }

        tournamentEntity existingEntity = existingEntityOpt.get();

        existingEntity.setDate(entity.getDate());
        existingEntity.setContact_number(entity.getContact_number());
        existingEntity.setSport_Name(entity.getSport_Name());
        existingEntity.setFirst_Prize(entity.getFirst_Prize());
        existingEntity.setSecond_prize(entity.getSecond_prize());
        existingEntity.setThird_prize(entity.getThird_prize());
        existingEntity.setAdress(entity.getAdress());
        existingEntity.setDescription(entity.getDescription());
        existingEntity.setEntryFrres(entity.getEntryFrres());

        return repo.save(existingEntity);
    }
    @Override
    public void deleteacc(Integer id) {
        Optional<tournamentEntity> del = repo.findById(id);
        if (del.isEmpty()) {
            throw new RuntimeException("Account not found");
        }
        repo.deleteById(id);
    }
     
    public List<tournamentEntity> findbyemail(String email) {
        return repo.findByEmail(email);
    }

 
}
