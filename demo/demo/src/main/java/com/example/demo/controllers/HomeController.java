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

    //http://localhost:85/test2/Jan?age=20&test=true
    @RequestMapping("/test2/{nazwa}")
    @ResponseBody
    public String index2(
            @PathVariable String nazwa,
            @RequestParam Integer age,
            @RequestParam Boolean test

    ) {
        return "Hi " + nazwa + "!" + " age" + age+" test:"+test;
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