package com.example.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.server.entity.JapaneseEntity;

public interface JapaneseRepository extends JpaRepository<JapaneseEntity, String>{

}