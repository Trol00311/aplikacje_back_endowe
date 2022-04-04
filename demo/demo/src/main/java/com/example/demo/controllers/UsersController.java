package com.example.demo.controllers;

import com.example.demo.UserEntity;
import com.example.demo.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.ArrayList;
import java.util.List;

@Controller
public class UsersController {
    @Autowired
    private UsersService usersService;

    @RequestMapping("/users")
    public  String users(){
        return"users";
    }

    @RequestMapping("/api/users")
    @ResponseBody
    public  String getApiUsers(){
        return this.usersService.getUsers();
    }

    @RequestMapping("/api/users/{id}")
    @ResponseBody
    public  String getApiUser(
            @PathVariable long id
    ){
        return "User ID: " +id;
    }

    /*@RequestMapping("/api/users2/{id}")
    @ResponseBody
    public Object getApiUser2(
            @PathVariable long id
    ){
        return new UserEntity(1L, "John");
    }*/



    private void allUsers(){
        List<UserEntity> users = new ArrayList<>();
        users.add(new UserEntity(1L,"test1"));
        users.add(new UserEntity(2L,"test2"));
        users.add(new UserEntity(3L,"test3"));
    }


}
