package com.deliveryappdata.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="order_items")
public class OrderItem {

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "quantity")
    private int quantity;
    
    @Column(name = "order_id")
    private int orderId;
    
    @Column(name="item_id")
    private int itemId;

    public OrderItem(int quantity, int orderId, int itemId) {
        this.quantity = quantity;
        this.orderId = orderId;
        this.itemId = itemId;
    }

    public OrderItem(){
        
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    
    
}
