package com.example.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.server.entity.JapaneseEntity;
import com.example.server.repository.JapaneseRepository;

@Service
public class JapaneseService {

    @Autowired
    private JapaneseRepository japaneseRepository;
    
    public String getContentById(String id) {
        JapaneseEntity jpnContent = japaneseRepository.findContentById(id);
        return jpnContent.getContents();
    }
}
