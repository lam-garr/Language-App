package com.example.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.entity.UserEntity;
import com.example.server.services.UserService;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
}
