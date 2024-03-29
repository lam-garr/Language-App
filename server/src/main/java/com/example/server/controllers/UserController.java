package com.example.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.entity.UserEntity;
import com.example.server.models.EditUserDataReq;
import com.example.server.models.SignupReq;
import com.example.server.security.UserPrincipal;
import com.example.server.services.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public void saveUser(@RequestBody SignupReq req) {
        userService.saveUser(req.getUsername(), req.getPassword());
        return;
    }

    @GetMapping("/user-data")
    public String getUserData(@AuthenticationPrincipal UserPrincipal principal) {
        return userService.getUserData(principal.getUserId());
    }

    @GetMapping("/user-data-edit")
    public void editUserData(@RequestBody EditUserDataReq req, 
        @AuthenticationPrincipal UserPrincipal principal) {
            userService.editUserData(req.getUpdatedData(), principal.getUserId());
            return;
    }

    @GetMapping("/get-user-courses")
    public List<String> getUserCourses() {
        return userService.getUserCourses();
    }

    @PostMapping("/user-auth")
    public boolean getUserAuthenticated(@AuthenticationPrincipal UserPrincipal principal) {
        return userService.getAuthenticated(principal.getUserId());
    }

    @GetMapping("/user-account-data")
    public String getUsername(@AuthenticationPrincipal UserPrincipal principal) {
        return userService.getUsername(principal.getUserId());
    }
}
