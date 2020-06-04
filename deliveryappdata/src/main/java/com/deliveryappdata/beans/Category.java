package com.deliveryappdata.beans;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Category {
    
    @Id
    private int id;
    
    private String name;
    private String description;
    
    /*@OneToMany(
        mappedBy = "category",
        cascade = CascadeType.PERSIST,
        fetch = FetchType.LAZY
    )
    private Set<Item> items;

    public Set<Item> getItems() {
        return items;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }*/

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
    
    
}
