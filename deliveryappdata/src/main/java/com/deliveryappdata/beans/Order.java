package com.deliveryappdata.beans;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    
    @Column(name="total_price")
    private double totalPrice;
    
    @OneToMany
    private Set<OrderItem> items = new HashSet<>();

    @Column(name="email")
    private String email;
    
    @Column(name="order_date")
    private Timestamp orderDate;// = new Timestamp(new Date().getTime());

    public int getId() {
        return id;
    }
    
    public boolean isEmpty(){
        return items.isEmpty();
    }

    public Set<OrderItem> getItems() {
        return items;
    }

    public void setItems(Set<OrderItem> items) {
        this.items = items;
    }

    public Timestamp getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Timestamp orderDate) {
        this.orderDate = orderDate;
    }
    
    

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
    
    public void addItem(OrderItem item){
        items.add(item);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Order(double totalPrice, String email, Timestamp orderDate) {
        this.totalPrice = totalPrice;
        this.email = email;
        this.orderDate = orderDate;
    }
    
    
    
}
