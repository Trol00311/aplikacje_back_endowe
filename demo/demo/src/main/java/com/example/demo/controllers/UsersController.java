package com.example.demo.controllers;

import com.example.demo.UserEntity;
import com.example.demo.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
public class UsersController {
    @Autowired
    private UsersService usersService;

    @RequestMapping("/users")
    public String users() {
        return "users";
    }

    @RequestMapping("/api/users")
    @ResponseBody
    public String getApiUsers() {
        return this.usersService.getUsers();
    }

    @RequestMapping("/api/users/{id}")
    @ResponseBody
    public String getApiUser(
            @PathVariable long id
    ) {
        return "User ID: " + id;
    }

    private final Map<Integer, UserEntity> mapUser = new HashMap<>(Map.of(1, new UserEntity(1L, "Tom"), 2, new UserEntity(2L, "John")));


    @GetMapping("/users/all")
    public ResponseEntity<Collection<UserEntity>> getApiUser2() {
        return ResponseEntity.ok(mapUser.values());
    }

    @RequestMapping("/users/{id}/get")
    @ResponseBody
    public ResponseEntity<UserEntity> getAddUsers(
            @PathVariable("id") int id
    ) {
        return ResponseEntity.of(Optional.ofNullable(mapUser.get(id)));
    }
    @RequestMapping("/users/{id}/remove")
    @ResponseBody
    public ResponseEntity<UserEntity> getRemoveUsers(
            @PathVariable("id") int id
    ) {
        return ResponseEntity.of(Optional.ofNullable(mapUser.remove(id)));
    }
}

