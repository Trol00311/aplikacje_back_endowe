package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserEntity {
    public Integer Id;
    public String name;
    public Integer age;

    //to co wpisujemy
    public UserEntity(@JsonProperty("Id") Integer id, @JsonProperty("name") String name, @JsonProperty("age") Integer age) {
        Id = id;
        this.name = name;
        this.age = age;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
