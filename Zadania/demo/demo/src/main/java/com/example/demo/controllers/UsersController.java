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

    private final Map<Integer, UserEntity> mapUser = new HashMap<>(Map.of(1, new UserEntity(1, "Tom"), 2, new UserEntity(2, "John")));

    //http://localhost:85/users/all
    @GetMapping("/users/all")
    public ResponseEntity<Collection<UserEntity>> getApiUser2() {
        return ResponseEntity.ok(mapUser.values());
    }

    //http://localhost:85/users/3/get
    @RequestMapping("/users/{id}/get")
    @ResponseBody
    public ResponseEntity<UserEntity> getAddUsers(
            @PathVariable("id") int id
    ) {
        return ResponseEntity.of(Optional.ofNullable(mapUser.get(id)));
    }
    //http://localhost:85/users/2/remove
    @RequestMapping("/users/{id}/remove")
    @ResponseBody
    public ResponseEntity<UserEntity> GetRemoveAddUsers(
            @PathVariable("id") int id
    ) {
        return ResponseEntity.of(Optional.ofNullable(mapUser.remove(id)));
    }

    //localhost:85/users/add?nazwa=Jan
    @RequestMapping("/users/add")
    @ResponseBody
    public ResponseEntity<UserEntity> ApiAddUser
            (@RequestParam String nazwa
             ) {
        Integer id = mapUser.size() + 1;
        UserEntity newUser = new UserEntity(id, nazwa);
        mapUser.put(id, newUser);

        return ResponseEntity.of(Optional.ofNullable(mapUser.put(id, newUser)));

    }
}