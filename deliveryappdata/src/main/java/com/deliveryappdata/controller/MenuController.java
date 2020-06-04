/*
!!! Not used due to the client side being a separate React Project
!!!
!!!


package com.deliveryappdata.controller;

import com.deliveryappdata.beans.Order;
import com.deliveryappdata.model.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MenuController {
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    Order order = new Order();
    
    @RequestMapping(value = {"/", "/menu"})
    public String showMenu(Model model){
        model.addAttribute("total", order.getTotalPrice());
        model.addAttribute("categories", categoryRepository.findAll());
        return "menu";
    }
    
    @GetMapping("/checkout")
    public String checkout(Model model){
        model.addAttribute("total", order.getTotalPrice());
        model.addAttribute("order", order);
        
        return "checkout";
    }
    
}

*/