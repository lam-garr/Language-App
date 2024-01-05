package com.example.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.server.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, String>{
    
    public UserEntity findByUsername(String username);
}
