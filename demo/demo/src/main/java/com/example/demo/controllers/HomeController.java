package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
    //http://localhost:85/
    @RequestMapping("/")
    @ResponseBody
    public String index() {

        return "Hello World!";
    }

    //http://localhost:85/templates
    @RequestMapping("/templates")
    public String template() {
        return "template";
    }

    @RequestMapping("/zadanie4")
    public String example() {
        return "example";
    }
}