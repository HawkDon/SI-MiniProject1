package com.entities;

public class Animal {

    private Integer id;
    private String name;
    private String description;
    private int dailySleep;

    public Animal(Integer id, String name, String description, int dailySleep) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.dailySleep = dailySleep;
    }


    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public int getDailySleep() {
        return dailySleep;
    }
}
