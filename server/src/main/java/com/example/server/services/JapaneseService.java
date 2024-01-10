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
}
