package com.example.server.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.entity.JapaneseEntity;
import com.example.server.models.GetLanguageReq;
import com.example.server.services.JapaneseService;

@RestController
public class JapaneseController {

    @Autowired
    private JapaneseService japaneseService;

    @GetMapping("/get-one-jpn")
    public String getContentById(@RequestBody GetLanguageReq req) {
        return japaneseService.getContentById(req.getId());
    }

    @PostMapping("get-next-jpn")
    public String getNextById(@RequestBody GetLanguageReq req) {
        return japaneseService.getNextById(req.getId());
    }

    @PostMapping("get-prev-jpn")
    public String getPrevById(@RequestBody GetLanguageReq req) {
        return japaneseService.getPrevById(req.getId());
    }

    @PostMapping("get-all-prev-jpn")
    public Optional<List<JapaneseEntity>> getAllPrevById(@RequestBody GetLanguageReq req) {
        return japaneseService.getAllPrevById(req.getId());
    }
}
