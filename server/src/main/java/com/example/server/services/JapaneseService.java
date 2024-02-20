package com.example.server.services;

import java.util.List;
import java.util.Optional;

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

    public String getNextById(String id) {
        JapaneseEntity jpnContent = japaneseRepository.findNextById(id);

        if(jpnContent==null) return "n/a";

        return jpnContent.getContents();
    }

    public String getPrevById(String id) {
        JapaneseEntity jpnContent = japaneseRepository.findPrevById(id);

        if(jpnContent==null) return "n/a";

        return jpnContent.getContents();
    }

    public Optional<List<JapaneseEntity>> getAllPrevById(String id) {
        return Optional.of(japaneseRepository.findAllPrevById(id));
    }
}
