package com.example.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.services.JapaneseService;

@RestController
public class JapaneseController {
    @Autowired
    private JapaneseService japaneseService;
}
