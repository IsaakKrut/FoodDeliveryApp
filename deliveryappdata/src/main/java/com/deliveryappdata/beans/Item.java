package com.deliveryappdata.beans;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Item {
    
    @Id
    private int id;
    
    private String name;
    
    private int category_id;
    private String calories;
    private double price;
    private String description;

    public int getId() {
        return id;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory(int category_id) {
        this.category_id = category_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String getCalories() {
        return calories;
    }

    public void setCalories(String calories) {
        this.calories = calories;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
    
    
}
