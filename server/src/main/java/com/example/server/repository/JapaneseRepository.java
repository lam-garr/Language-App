package com.example.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.server.entity.JapaneseEntity;

public interface JapaneseRepository extends JpaRepository<JapaneseEntity, String>{
    @Query(value="SELECT a FROM JapaneseEntity a WHERE a.id = ?1")
    public JapaneseEntity findContentById(String id);

    @Query(value="SELECT a FROM JapaneseEntity a WHERE a.id > ?1 ORDER BY a.id limit 1")
    public JapaneseEntity findNextById(String id);

    @Query(value="SELECT a FROM JapaneseEntity a WHERE a.id < ?1 ORDER BY a.id DESC limit 1")
    public JapaneseEntity findPrevById(String id);

    @Query(value="SELECT a FROM JapaneseEntity a WHERE a.id < ?1 ORDER BY a.id DESC")
    public List<JapaneseEntity> findAllPrevById(String id);
}
