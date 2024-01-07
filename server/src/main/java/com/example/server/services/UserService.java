package com.example.server.services;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.server.entity.UserEntity;
import com.example.server.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<UserEntity> findByUsername(String username) {

        var foundUser = userRepository.findByUsername(username);

        if(foundUser == null){
            return Optional.empty();
        }

        var user = new UserEntity();

        user.setId(foundUser.getId());
        user.setUsername(foundUser.getUsername());
        user.setPassword(foundUser.getPassword());
        return Optional.of(user);
    }

    public void saveUser(String username, String password) {
        String id = UUID.randomUUID().toString();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        String createdNow = dtf.format(now);

        var saveUser = userRepository.save(new UserEntity(
            id,
            username, 
            new BCryptPasswordEncoder().encode(password), 
            "none", 
            createdNow));

        return;
    }

    public String getUserData(String id) {
        UserEntity currentUser = userRepository.findUserById(id);

        return currentUser.getData();
    }

}
