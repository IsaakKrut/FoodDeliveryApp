package com.deliveryappdata.controller;

import java.net.URISyntaxException;
import java.util.Collection;
import javax.validation.Valid;

import com.deliveryappdata.beans.Category;
import com.deliveryappdata.beans.Item;
import com.deliveryappdata.beans.Order;
import com.deliveryappdata.beans.OrderItem;
import com.deliveryappdata.model.CategoryRepository;
import com.deliveryappdata.model.ItemRepository;
import com.deliveryappdata.model.OrderItemRepository;
import com.deliveryappdata.model.OrderRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    private OrderRepository orderRepository;
    private CategoryRepository categoryRepository;
    private ItemRepository itemRepository;
    private OrderItemRepository orderItemRepository;

    public ItemController(CategoryRepository categoryRepository, OrderRepository orderRepository, ItemRepository itemRepository, OrderItemRepository orderItemRepository){
        this.categoryRepository = categoryRepository;
        this.orderRepository = orderRepository;
        this.itemRepository = itemRepository;
        this.orderItemRepository = orderItemRepository;
    }

    @GetMapping("/categories")
    Collection<Category> categories(){
        return (Collection<Category>) categoryRepository.findAll();
    }

    @GetMapping("/items")
    Collection<Item> items(){
        return (Collection<Item>) itemRepository.findAll();
    }

    @PostMapping("/orders")
    ResponseEntity<Order> createOrder(@Valid @RequestBody Order order) throws URISyntaxException{
        Order result = orderRepository.save(new Order(order.getTotalPrice(), order.getEmail(), order.getOrderDate()));
        order.getItems().forEach((OrderItem item)->{
            item.setOrderId(result.getId());
            orderItemRepository.save(new OrderItem(item.getQuantity(),item.getOrderId(), item.getItemId()));
        });
        return ResponseEntity.ok().body(result);
    }
    
    
    
}